async function getAllUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let users = await response.json();
        console.log("Total users fetched:", users.length);
        console.log("First user:", users[0].name);
    } catch (error) {
        console.log("Fetch error:", error.message);
    }
}

getAllUsers();
