import Contacts from "./Contacts";
import AddContact from "./AddContacts";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./SideBar";
import DeleteContact from "./DeleteContact";
import SearchContact from "./SearchContact";

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <h1 className="text-center">Phone Contacts App</h1>
          <Routes>
            <Route path="/" element={<div>Welcome to the Contacts App!</div>} />
            <Route
              path="/contacts"
              element={
                <Contacts contacts={contacts} setContacts={setContacts} />
              }
            />
            <Route
              path="/add-contact"
              element={
                <AddContact contacts={contacts} setContacts={setContacts} />
              }
            />
            <Route
              path="/delete-contact"
              element={
                <DeleteContact contacts={contacts} setContacts={setContacts} />
              }
            />
            <Route
              path="/search-contact"
              element={
                <SearchContact contacts={contacts} setContacts={setContacts} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
