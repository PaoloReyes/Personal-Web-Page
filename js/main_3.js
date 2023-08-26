const projects = document.querySelectorAll('.work');

let i = 0;
for (let project of projects) { 
    project.innerHTML = '<img src="./images/'+projects_name_reciente[i]+'_profile.jpg"></img>';
    project.innerHTML += '<div class="layer"><h3>'+projects_title_reciente[i]+'</h3><p>'+projects_description_reciente[i]+'</p><a href="./projects/'+projects_name_reciente[i]+'"><i class="fas fa-external-link-alt"></i></a></div>';
    i++;
}