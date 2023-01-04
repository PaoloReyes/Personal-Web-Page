import os
import re
import datetime

directory = "d:/Proyectos/Personal WebPage/proyectos/"

projects = {}
for filename in os.listdir(directory):
    date = None
    with open(directory+filename) as file:
        date = file.readline().strip('<!->\n').split('/')
        date = datetime.datetime(int(date[2]), int(date[1]), int(date[0]))
    projects[re.sub(r'\.html$', '', filename)] = date
#Alfabético
alfabetico = list(projects.keys())
alfabetico.sort()
#Mas antiguo
projects = {k: v for k, v in sorted(projects.items(), key=lambda item: item[1])}
antiguo = list(projects.keys())
#Mas reciente
reciente = antiguo[::-1]

directory_js = "d:/Proyectos/Personal WebPage/js/projects.js"

with open(directory_js, 'w') as file:
    file.write('let projects = document.getElementById("workplace");\n\n')
    file.write(f"let projects_name_a_z = {alfabetico}\n\n")
    file.write(f"let projects_name_antiguo = {antiguo}\n\n")
    file.write(f"let projects_name_reciente = {reciente}\n\n")
    file.write("""for (let project_name of projects_name_reciente) {\n  projects.innerHTML += '<div class="work"><a href="./proyectos/'+project_name+'.html"><img style="cursor: pointer;" src="images/'+project_name+'_profile.jpg"></a></div>'\n}""")