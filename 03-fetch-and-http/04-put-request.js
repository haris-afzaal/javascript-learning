
async function updateUser() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/2",
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Haris Ahmad",
                    email: "haris@gmail.com",
                    username: "harisdev"
                })
            }
        );

        if (!response.ok) {
            throw new Error("User update nahi hua");
        }

        let data = await response.json();

        console.log("Updated User:", data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

updateUser();
