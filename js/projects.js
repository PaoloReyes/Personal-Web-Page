let projects = document.getElementById("workplace");

let projects_name = ['aerodesign', 'anet-autolevel', 'anetA8-plotter', 'bazoobed', 'biblioteca', 'cafeteria', 'dif', 'e-bike', 'e-gokart', 'eggcnc', 'estabilizador', 'evolution-up', 'filtros-3D', 'first-2019-1', 'first-2019-2', 'first-2020-1', 'first-2020-2', 'first-2021', 'first-2022', 'first-nacional', 'fundacion-plan', 'huerto-iot', 'iron-man', 'kenia', 'mano-robotica', 'oci-2015', 'paolo-inspires', 'plotter-cnc', 'programacion-competitiva', 'regata', 'rlc', 'robociety', 'robot-diferencial', 'roc', 'router-cnc', 'silla-de-ruedas', 'skeleton-tracking']

for (let project_name of projects_name) {
    projects.innerHTML += '<div class="work"><a href="./proyectos/'+project_name+'.html"><img style="cursor: pointer;" src="images/'+project_name+'_profile.jpg"></a></div>'
}