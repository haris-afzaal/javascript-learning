
async function createPost() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "My First Post",
                    body: "I am learning JavaScript",
                    userId: 1
                })
            }
        );

        if (!response.ok) {
            throw new Error("Post create nahi hui");
        }

        let data = await response.json();

        console.log("Post Created:", data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

createPost();
