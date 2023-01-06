import os
import re
import datetime

directory = "d:/Proyectos/Personal WebPage/proyectos/"

projects = {}
for filename in os.listdir(directory):
    date = None
    with open(directory+filename, encoding="UTF-8") as file:
        date = file.readline().strip('<!->\n').split('/')
        date = datetime.datetime(int(date[2]), int(date[1]), int(date[0]))
    projects[re.sub(r'\.html$', '', filename)] = date
#Alfabético
alfabetico = list(projects.keys())
dates_alfabetico = list(projects.values())
#Mas antiguo
projects = {k: v for k, v in sorted(projects.items(), key=lambda item: item[1])}
antiguo = list(projects.keys())
dates_antiguo = list(projects.values())
#Mas reciente
reciente = antiguo[::-1]
dates_reciente = dates_antiguo[::-1]

#Titulos y descripción
#A-Z
titles_alfabetico = []
for file in alfabetico:
    with open(directory+file+".html", encoding="UTF-8") as file:
        for idx, line in enumerate(file.readlines()):
            if "title" in line:
                line = re.sub(r'^.+>', '', re.sub(r'</title>\n$', '', line))
                titles_alfabetico.append(line)
                break

#Antiguo
titles_antiguo = []
for file in antiguo:
    with open(directory+file+".html", encoding="UTF-8") as file:
        for idx, line in enumerate(file.readlines()):
            if "title" in line:
                line = re.sub(r'^.+>', '', re.sub(r'</title>\n$', '', line))
                titles_antiguo.append(line)
                break

#Reciente
titles_reciente = []
description = []
counter = 0
for file in reciente:
    with open(directory+file+".html", encoding="UTF-8") as file:
        for idx, line in enumerate(file.readlines()):
            if counter != 3:
                if idx == 1:
                    description.append(re.sub(r'^<!--', '', re.sub(r'-->\n$', '', line)))
                    counter+=1
            if "title" in line:
                line = re.sub(r'^.+>', '', re.sub(r'</title>\n$', '', line))
                titles_reciente.append(line)
                break

directory_js = "d:/Proyectos/Personal WebPage/js/projects_list.js"

with open(directory_js, 'w', encoding="UTF-8") as file:
    file.write(f"let projects_name_a_z = {[file for file in alfabetico]}\n\n")
    file.write(f"let projects_name_antiguo = {[file for file in antiguo]}\n\n")
    file.write(f"let projects_name_reciente = {[file for file in reciente]}\n\n")
    file.write(f"let projects_title_a_z = {[title for title in titles_alfabetico]}\n\n")
    file.write(f"let projects_title_antiguo = {[title for title in titles_antiguo]}\n\n")
    file.write(f"let projects_title_reciente = {[title for title in titles_reciente]}\n\n")
    file.write(f"let projects_date_a_z = {[date.strftime('%d/%m/%Y') for date in dates_alfabetico]}\n\n")
    file.write(f"let projects_date_antiguo = {[date.strftime('%d/%m/%Y') for date in dates_antiguo]}\n\n")
    file.write(f"let projects_date_reciente = {[date.strftime('%d/%m/%Y') for date in dates_reciente]}\n\n")
    file.write(f"let projects_description_reciente = {[desc for desc in description]}")