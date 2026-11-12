
async function getUsers() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users?_limit=5"
        );

        if (!response.ok) {
            throw new Error("Data nahi mila");
        }

        let data = await response.json();

        console.log(data);

        console.log("Total Users:", data.length);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();
