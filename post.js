const queryString = window.location.search;
const yeniDeger = queryString.split("=")[1];

async function posts(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${yeniDeger}`);
    const data = await response.json();

    data.forEach((post) => {
        cards(post);
    });
};

let row = document.getElementById("card1");

async function cards(post){
    row.innerHTML += `
    
    <ul>
        <li>${post.userId}</li>
        <li>${post.id}</li>
        <li>${post.title}</li>
        <li>${post.body}</li>
    </ul>
    `
};

posts();