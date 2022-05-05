$(document).ready(function () {
    
    //VALIDO QUE INGRESE ALGO EN EL INPUT
    $("#CampoNombre").on("input", function () {
        if ($("#CampoNombre").val() == "") {
            $("#CampoNombre").addClass("error");
            $("#CampoNombre").removeClass("ok");
            $("#mensaje_nom").html("No olvide llenar este campo.");
        } else {
            $("#CampoNombre").removeClass("error");
            $("#CampoNombre").addClass("ok");
            $("#mensaje_nom").html("");
        }
    });

    $("#CampoColor").on("input", function () {
        if ($("#CampoColor").val() == "") {
            $("#CampoColor").addClass("error");
            $("#CampoColor").removeClass("ok");
            $("#mensaje_color").html("No olvide llenar este campo.");
        } else {
            $("#CampoColor").removeClass("error");
            $("#CampoColor").addClass("ok");
            $("#mensaje_color").html("");
        }
    });

    $("#CampoRaza").on("input", function () {
        if($("#CampoRaza").val() == "") {
            $("#CampoRaza").addClass("error");
            $("#CampoRaza").removeClass("ok");
            $("#mensaje_raza").html("No olvide llenar este campo.");
        } else {
            $("#CampoRaza").removeClass("error");
            $("#CampoRaza").addClass("ok");
            $("#mensaje_raza").html("");
        }
    }); 

    $("#CampoPrecio").on("input", function () {
        if ($("#CampoPrecio").val() == "") {
            $("#CampoPrecio").addClass("error");
            $("#CampoPrecio").removeClass("ok");
            $("#mensaje_prec").html("No olvide llenar este campo.");
        } else {
            $("#CampoPrecio").removeClass("error");
            $("#CampoPrecio").addClass("ok");
            $("#mensaje_prec").html("");
        }
    });

    $("#CampoDescuento").on("input", function () {
        if($("#CampoDescuento").val() == "") {
            $("#CampoDescuento").addClass("error");
            $("#CampoDescuento").removeClass("ok");
            $("#mensaje_descu").html("No olvide llenar este campo.");
        } else {
            $("#CampoDescuento").removeClass("error");
            $("#CampoDescuento").addClass("ok");
            $("#mensaje_descu").html("");
        }
    }); 

    $("#CampoStock").on("input", function () {
        if($("#CampoStock").val() == "") {
            $("#CampoStock").addClass("error");
            $("#CampoStock").removeClass("ok");
            $("#mensaje_stock").html("No olvide llenar este campo.");
        } else {
            $("#CampoStock").removeClass("error");
            $("#CampoStock").addClass("ok");
            $("#mensaje_stock").html("");
        }
    }); 

    $("#CampoMateriales").on("input", function () {
        if($("#CampoMateriales").val() == "") {
            $("#CampoMateriales").addClass("error");
            $("#CampoMateriales").removeClass("ok");
            $("#mensaje_mate").html("No olvide llenar este campo.");
        } else {
            $("#CampoMateriales").removeClass("error");
            $("#CampoMateriales").addClass("ok");
            $("#mensaje_mate").html("");
        }
    }); 

    $("#CampoDescripcion").on("input", function () {
        if($("#CampoDescripcion").val() == "") {
            $("#CampoDescripcion").addClass("error");
            $("#CampoDescripcion").removeClass("ok");
            $("#mensaje_descr").html("No olvide llenar este campo.");
        } else {
            $("#CampoDescripcion").removeClass("error");
            $("#CampoDescripcion").addClass("ok");
            $("#mensaje_descr").html("");
        }
    }); 

});