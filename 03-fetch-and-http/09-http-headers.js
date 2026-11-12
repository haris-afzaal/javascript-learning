
async function getUsers() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "GET",

                headers: {
                    "Accept": "application/json"
                }
            }
        );

        if (!response.ok) {
            throw new Error("Data nahi mila");
        }

        console.log("Status:", response.status);

        console.log("Content Type:",
            response.headers.get("content-type")
        );

        let data = await response.json();

console.log(data[0].name);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();
