

document.addEventListener("DOMContentLoaded", () => {
    const postsList = document.querySelector(".posts-list ul");

    // Fetch fake API data
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const listItem = document.createElement("li");
                listItem.textContent = post.title;
                postsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
