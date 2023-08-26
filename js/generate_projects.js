export function generate_projects(container, projects_name, projects_title, projects_date) {
    for (let i = 0; i < projects_name.length; i++) {
        container.innerHTML += '<div class="work-container"><h1>'+projects_title[i]+'</h1><div class="work"><a href="./projects/'+projects_name[i]+'.html"><img style="cursor: pointer;" src="images/'+projects_name[i]+'_profile.jpg"></a></div><p>Date: '+projects_date[i]+'</p></div>'
    }
}