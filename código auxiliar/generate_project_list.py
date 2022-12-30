import os

directory = "d:/Proyectos/Personal WebPage/proyectos"

projects = []
for filename in os.listdir(directory):
    projects.append(filename.rstrip(".html"))
print(projects)