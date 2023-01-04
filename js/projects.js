let projects = document.getElementById("workplace");

for (let project_name of projects_name_reciente) {
  projects.innerHTML += '<div class="work"><a href="./proyectos/'+project_name+'.html"><img style="cursor: pointer;" src="images/'+project_name+'_profile.jpg"></a></div>'
}