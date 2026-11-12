
async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Users ka data nahi mila");
        }

        let data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();
