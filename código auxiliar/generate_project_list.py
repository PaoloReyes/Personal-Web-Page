import os
import re

directory = "d:/Proyectos/Personal WebPage/proyectos"

projects = []
for filename in os.listdir(directory):
    projects.append(re.sub(r'\.html$', '', filename))
print(projects)