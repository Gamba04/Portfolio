window.onload = Load;

async function Load()
{
    await LoadElement("itch-io");
    await LoadElement("contact");
}

async function LoadElement(id)
{
    let element = document.getElementById(id);
    let path = `../templates/${id}.html`;

    let template = await fetch(path);
    element.innerHTML = await template.text();
}