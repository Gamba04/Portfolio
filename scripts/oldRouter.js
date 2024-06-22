let pageContainer;

const pages = 
{
    "/" : "../pages/home.html",
    "/music&art" : "../pages/music&art.html",
    "/about" : "../pages/about.html"
}

window.onload = () =>
{
    pageContainer = document.getElementById("page-container");

    updatePage();
}

window.route = e =>
{
    console.log("Route");

    e = e || window.event;
    e.preventDefault();
    
    window.history.pushState({}, "", e.target.href);

    updatePage();
}

window.onpopstate = updatePage;

async function updatePage()
{
    console.log("Update page");

    const route = pages[window.location.pathname];

    const file = await fetch(route);
    const data = await file.text();

    pageContainer.innerHTML = data;
}