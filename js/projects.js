import { generate_projects } from './generate_projects.js';

const projects = document.getElementById("workplace");

let projects_name = [];
let projects_title = [];
let projects_date = [];

const sort_type = "Newer";
if (sort_type == 'A-Z') {
  projects_name = projects_name_a_z;
  projects_title = projects_title_a_z;
  projects_date = projects_date_a_z;
} else if (sort_type == 'Older') {
  projects_name = projects_name_antiguo;
  projects_title = projects_title_antiguo;
  projects_date = projects_date_antiguo;
} else if (sort_type == 'Newer') {
  projects_name = projects_name_reciente;
  projects_title = projects_title_reciente;
  projects_date = projects_date_reciente;
}

generate_projects(projects, projects_name, projects_title, projects_date);