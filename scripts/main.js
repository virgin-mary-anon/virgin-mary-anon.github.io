const img = document.querySelector("img");

img.onclick = () => {
    src = img.getAttribute("src");
    if (src === "images/firefox-icon.png") {
        img.setAttribute("src", "images/firefox-icon2.png");
    } else {
        img.setAttribute("src", "images/firefox-icon.png");
    }
};

const button = document.querySelector("button");
const heading = document.querySelector("h1");

let uname = "no name";
if (localStorage.getItem("uname") === "null") {
    uname = prompt("please type your name");
    localStorage.setItem("uname", uname);
} else {
    uname = localStorage.getItem("uname");
}
heading.textContent = `Mozilla is cool! ${uname}`;
button.onclick = () => {
    const _uname = prompt("please type your name");
    if (_uname !== null) {
        localStorage.setItem("uname", _uname);
    }
    heading.textContent = `Mozilla is cool! ${localStorage.getItem("uname")}`;
};
