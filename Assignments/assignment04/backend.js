// Server
const path = require("path");
var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads")); // Serve images statically

const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "password*",
  database: "secoms3190",
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

var multer = require("multer");

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save images in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage: storage });

// Create "uploads" folder if it doesn't exist
const fs = require("fs");
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.get("/contact", (req, res) => {
  try {
    db.query("SELECT * FROM contact", (err, result) => {
      if (err) {
        console.error({ error: "Error reading all posts:" + err });
        return res
          .status(500)
          .send({ error: "Error reading all contacts" + err });
      }
      res.status(200).send(result);
    });
  } catch (error) {
    console.error({ error: "An unexpected error occurred" + err });
    res.status(500).send({ error: "An unexpected error occurred" + err });
  }
});

app.post("/contact", upload.single("image"), (req, res) => {
  const { contact_name, phone_number, message } = req.body;

  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const query =
    "INSERT INTO contact (contact_name, phone_number, message, image_url) VALUES (?, ?, ?, ?)";
  try {
    db.query(
      query,
      [contact_name, phone_number, message, imageUrl],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send({ error: "Error inserting contact" + err });
        } else {
          res.status(201).send({ message: "Contact inserted successfully" });
        }
      }
    );
  } catch (err) {
    console.error("Error in POST /contact:", err);
    res
      .status(500)
      .send({ error: "An unexpected error occurred: " + err.message });
  }

  const checkQuery = "SELECT * FROM contact WHERE contact_name = ?";
  db.query(checkQuery, [contact_name], (checkErr, checkResult) => {
    if (checkErr) {
      console.error("Database error during validation:", checkErr);
      return res
        .status(500)
        .send({ error: "Error checking contact name: " + checkErr.message });
    }
    if (checkResult.length > 0) {
      // If contact_name exists, send a conflict response
      return res.status(409).send({ error: "Contact name already exists." });
    }
  });
});

app.delete("/contact/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM contact WHERE id = ?";
  try {
    db.query(query, [id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ err: "Error deleting contact" });
      } else if (result.affectedRows === 0) {
        res.status(404).send({ err: "Contact not found" });
      } else {
        res.status(200).send("Contact deleted successfully");
      }
    });
  } catch (err) {
    console.error("Error in DELETE /contact:", err);
    res.status(500).send({
      error: "An unexpected error occurred in DELETE: " + err.message,
    });
  }
});

app.put("/contact/:id", (req, res) => {
  const id = req.params.id;

  const query = `
        UPDATE contact
        SET contact_name = ?, phone_number = ?, message = ?
        WHERE id = ?
        `;

  try {
    db.query(
      query,
      [contact_name, phone_number, message, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send({ err: "Error updating contact" });
        } else if (result.affectedRows === 0) {
          res.status(404).send({ err: "Contact not found" });
        } else {
          res.status(200).send("Contact updated successfully");
        }
      }
    );
  } catch (err) {
    console.error("Error in UPDATE /contact:", err);
    res.status(500).send({
      error: "An unexpected error occurred in UPDATE: " + err.message,
    });
  }
});

app.get("/contact/name", (req, res) => {
    const { contact_name } = req.query;

    if (!contact_name) {
        return res.status(400).send({ error: "contact_name is required" });
    }

    const query = "SELECT * FROM contact WHERE LOWER(contact_name) LIKE LOWER(?)";
    const searchValue = `%${contact_name}%`;

    try {
        db.query(query, [searchValue], (err, result) => {
            if (err) {
            console.error("Error fetching contacts:", err);
            return res.status(500).send({ error: "Error fetching contacts" });
            }
            res.status(200).send(result);
            });
    } catch (err) {
        console.error({ error: "An unexpected error occurred in GET by name"+err });
        res.status(500).send({ error: "An unexpected error occurred in GET by name"+err });
    }

});