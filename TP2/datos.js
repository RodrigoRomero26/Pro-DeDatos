function datos(){
    vnombre = document.getElementById("Nombre").value;
    vapellido = document.getElementById("Apellido").value;
    vdni = document.getElementById("DNI").value;
    vfecha = document.getElementById("Fecha").value;
    vdomicilio = document.getElementById("Domicilio").value;
    vlocalidad = document.getElementById("Localidad").value;

    const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    const valores = [];
    for (const checkbox of checkboxes){
        valores.push(checkbox.value);
    }

    document.write("Los datos ingresados fueron: <br/>");
    document.write("Nombre: "+vnombre+ "<br/>");
    document.write("Apellido: "+vapellido+ "<br/>");
    document.write("DNI: "+vdni+ "<br/>");
    document.write("Fecha: "+vfecha+ "<br/>");
    document.write("Domicilio: "+vdomicilio+ "<br/>");
    document.write("Localidad: "+vlocalidad+ "<br/>");
    document.write("Lenguajes seleccionados: "+valores.join(", ") + "<br/>");

}