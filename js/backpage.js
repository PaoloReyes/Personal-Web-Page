let header = document.getElementsByClassName("header-subpage")[0];

if (document.referrer == "https://paoloreyes.github.io/web/projects") {
    header.innerHTML = '<a href="https://paoloreyes.github.io/web/projects"><i class="fa-solid fa-angles-left"></i></a>'
} else {
    header.innerHTML = '<a href="https://paoloreyes.github.io/web/#projects"><i class="fa-solid fa-angles-left"></i></a>'
}

let title = "<h2>" + document.title + "</h2>";

let span = "<span></span>";

header.innerHTML += title + span;