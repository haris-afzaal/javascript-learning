
async function deleteUser() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/2",
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error("User delete nahi hua");
        }

        console.log("User deleted successfully!");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

deleteUser();
