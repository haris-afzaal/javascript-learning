async function getUser() {
    try {
        let result = await fetch("https://jsonplaceholder.typicode.com/users/999");

        if (!result.ok) {
            throw new Error("Data nahi mila");
        }

        let user = await result.json();

        console.log("Name:", user.name);
        console.log("Email:", user.email);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUser();