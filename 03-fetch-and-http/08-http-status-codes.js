async function getUsers() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log("Status Code:", response.status);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        let data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();