import { generate_projects } from './generate_projects.js';

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
    const projects = document.getElementById("workplace");

    let projects_name = [];
    let projects_title = [];
    let projects_date = [];
    if (sort_type == 'A-Z') {
        projects_name = projects_name_a_z;
        projects_title = projects_title_a_z;
        projects_date = projects_date_a_z;
    } else if (sort_type == 'Más Antiguo') {
        projects_name = projects_name_antiguo;
        projects_title = projects_title_antiguo;
        projects_date = projects_date_antiguo;
    } else if (sort_type == 'Más Reciente') {
        projects_name = projects_name_reciente;
        projects_title = projects_title_reciente;
        projects_date = projects_date_reciente;
    }

    projects.innerHTML = "";
    generate_projects(projects, projects_name, projects_title, projects_date);
}