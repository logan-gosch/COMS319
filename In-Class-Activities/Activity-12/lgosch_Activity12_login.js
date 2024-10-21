function fetchUser() {
    document.getElementById("loginuser").innerHTML = `Authenticating...`;
    return new Promise((resolve, reject) => {
        fetch("./lgosch_Activity12_login.json")
            .then((response) => {
                if (response.ok) {
                    resolve(response);
                } else {
                    reject("Cannot fetch data");
                }
            })
    });
}

function login(users, userInput, passwordInput) {
    if (users.user === userInput && users.password === passwordInput) {
        document.getElementById("loginuser").innerHTML = `Welcome ${users.user}`;
    } else {    
        document.getElementById("loginuser").innerHTML = `Invalid login`;
    }
}

async function useAdmin(userInput, passwordInput) {
    try {
        const response = await fetchUser();
        const users = await response.json();
        login(users, userInput, passwordInput);
    } catch (error) {
        console.error(error);
    }
}

document.getElementById("loginButton").addEventListener("click", (event) => {
    event.preventDefault();
    const usernameInput = document.getElementById("userInput");
    const passwordInput = document.getElementById("passwordInput");
    useAdmin(usernameInput.value, passwordInput.value);
});