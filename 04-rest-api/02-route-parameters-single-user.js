async function getUser() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/5"
        );

        if (!response.ok) {
            throw new Error("User nahi mila");
        }

        let user = await response.json();

        console.log("User ID:", user.id);
        console.log("Name:", user.name);
        console.log("Email:", user.email);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUser();