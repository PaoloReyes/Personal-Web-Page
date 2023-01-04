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

#Titulos y descripción
titles = []
description = []
for i in range(3):
    with open(directory+reciente[i]+".html") as file:
        for idx, line in enumerate(file.readlines()):
            if idx == 1:
                description.append(re.sub(r'^<!--', '', re.sub(r'-->\n$', '', line)))
            if "title" in line:
                line = re.sub(r'^.+>', '', re.sub(r'</title>\n$', '', line))
                titles.append(line)
                break

directory_js = "d:/Proyectos/Personal WebPage/js/projects_list.js"

with open(directory_js, 'w') as file:
    file.write(f"let projects_name_a_z = {alfabetico}\n\n")
    file.write(f"let projects_name_antiguo = {antiguo}\n\n")
    file.write(f"let projects_name_reciente = {reciente}\n\n")
    file.write(f"let projects_title_reciente = {titles}\n\n")
    file.write(f"let projects_description_reciente = {description}")