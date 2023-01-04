const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');

const optionsList = document.querySelectorAll('.option');

selected.addEventListener('click', () => {
    optionsContainer.classList.toggle('active');
});

optionsList.forEach(o => {
    o.addEventListener('click', () => {
        selected.innerHTML = o.querySelector('label').innerHTML;
        sort(selected.innerHTML);
        optionsContainer.classList.remove('active');
    });
});

function sort(sort_type) {
    projects.innerHTML = '';

    let projects_order = [];
    console.log(sort_type)
    if (sort_type == 'A-Z') {
        projects_order = projects_name_a_z;
    } else if (sort_type == 'Más Antiguo') {
        projects_order = projects_name_antiguo;
    } else if (sort_type == 'Más Reciente') {
        projects_order = projects_name_reciente;
    }

    for (let project_name of projects_order) {
        projects.innerHTML += '<div class="work"><a href="./proyectos/'+project_name+'.html"><img style="cursor: pointer;" src="images/'+project_name+'_profile.jpg"></a></div>'
    }
}