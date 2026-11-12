async function patchUserEmail(userId, newEmail) {
    try {
        let response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: newEmail
                })
            }
        );

        if (!response.ok) {
            throw new Error("User update nahi hua");
        }

        let updatedFields = await response.json();
        console.log("Patched User:", updatedFields);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

patchUserEmail(1, "new_updated_email@example.com");
