async function users(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    data.forEach(async (user) => {
        await cards(user);
    });
};

async function cards(user){
    let row = document.getElementById("row");

    row.innerHTML +=`
    <div class="cards">
        <ul>
        <h4>Temel Bilgiler</h4>
            <li><i class="fa-solid fa-user"></i> ${user.id}</li>
            <li><i class="fa-solid fa-user"></i> ${user.name}</li>
            <li><i class="fa-solid fa-user"></i> ${user.username}</li>
            <a href="post.html?userId=${user.id}"><button class="btn btn-primary">postlar</button></a>
        </ul>

        <ul>
        <h4>Kullanıcı Adresi</h4>
            <li><i class="fa-solid fa-location-dot"></i> ${user.address.street}</li>
            <li><i class="fa-solid fa-location-dot"></i> ${user.address.suite}</li>
            <li><i class="fa-solid fa-location-dot"></i> ${user.address.city}</li>
            <li><i class="fa-solid fa-location-dot"></i> ${user.address.zipcode}</li>
        </ul>

        <ul>
        <h4>Şirket Bilgileri</h4>
            <li><i class="fa-solid fa-building"></i> ${user.company.name}</li>
            <li><i class="fa-solid fa-building"></i> ${user.company.catchPhrase}</li>
            <li><i class="fa-solid fa-building"></i> ${user.company.bs}</li>
        </ul>

        <ul>
        <h4>İletişim Bilgileri</h4>
            <li><i class="fa-solid fa-envelope"></i> ${user.email}</li>
            <li><i class="fa-solid fa-phone"></i> ${user.phone}</li>
            <li><i class="fa-solid fa-globe"></i> ${user.website}</li>
        </ul>
    </div>
    `
};

users();

const btn = document.getElementById("sinan");

function goToLink(){
    let link = prompt("açıncı linke gitmek istiyorsunuz");
    window.location.href = `post.html?userId=${link}`;
}