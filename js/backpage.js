let header = document.getElementsByClassName("header-subpage")[0];

if (document.referrer == "https://paoloreyes.github.io/web/proyectos") {
    header.innerHTML = '<a href="https://paoloreyes.github.io/web/proyectos/"><i class="fa-solid fa-angles-left"></i></a>'
} else {
    header.innerHTML = '<a href="https://paoloreyes.github.io/web/"><i class="fa-solid fa-angles-left"></i></a>'
}