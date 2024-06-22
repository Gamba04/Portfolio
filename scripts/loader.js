window.onload = Load;

async function Load()
{
    let page = document.getElementById("page");
    let body = document.getElementsByTagName("body")[0];

    let index = await GetIndex();
    let indexBody = index.getElementsByTagName("body")[0];
    body.innerHTML = indexBody.innerHTML;

    let newPage = document.getElementById("page");
    newPage.innerHTML = page.innerHTML;
}

async function GetIndex()
{
    let response = await fetch("index.html");
    let html = await response.text();

    let index = ParseHTML(html);

    return index;
}

function ParseHTML(html)
{
    let parser = new DOMParser();

    return parser.parseFromString(html, "text/html");
}