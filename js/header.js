 fetch("partes/header.html")
    .then(r => r.text())
    .then(html => document.getElementById("header").innerHTML = html);
