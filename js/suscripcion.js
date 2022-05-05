$(document).ready(function () {

    $("#CampoRut").on("input", function () {
        if (Fn.validaRut($("#CampoRut").val())) {
            $("#CampoRut").removeClass("error");
            $("#CampoRut").addClass("ok");
            $("#mensaje_rut").html("");
        } else {
            $("#CampoRut").addClass("error");
            $("#CampoRut").removeClass("ok");
            $("#mensaje_rut").html("Ingresa un rut válido!.");
        }
    });

    //VALIDO QUE INGRESE ALGO EN EL INPUT
    $("#CampoNombre").on("input", function () {
        if ($("#CampoNombre").val() == "") {
            $("#CampoNombre").addClass("error");
            $("#CampoNombre").removeClass("ok");
            $("#mensaje_nom").html("Debe indicar algun nombre.");
        } else {
            $("#CampoNombre").removeClass("error");
            $("#CampoNombre").addClass("ok");
            $("#mensaje_nom").html("");
        }
    });

    $("#CampoEdad").on("input", function () {
        if($("#CampoEdad").val() == "") {
            $("#CampoEdad").addClass("error");
            $("#CampoEdad").removeClass("ok");
            $("#mensaje_edad").html("Debe indicar alguna edad.");
        } else {
            $("#CampoEdad").removeClass("error");
            $("#CampoEdad").addClass("ok");
            $("#mensaje_edad").html("");
        }
    });

    $("#CampoCorreo").on("input", function () {
        if ($("#CampoCorreo").val() == "") {
            $("#CampoCorreo").addClass("error");
            $("#CampoCorreo").removeClass("ok");
            $("#mensaje_email").html("Debe indicar algún email.");
        } else {
            $("#CampoCorreo").removeClass("error");
            $("#CampoCorreo").addClass("ok");
            $("#mensaje_email").html("");
        }
    });

    $("#CampoUsuario").on("input", function () {
        if ($("#CampoUsuario").val() == "") {
            $("#CampoUsuario").addClass("error");
            $("#CampoUsuario").removeClass("ok");
            $("#mensaje_usu").html("Debe indicar algún usuario.");
        } else {
            $("#CampoUsuario").removeClass("error");
            $("#CampoUsuario").addClass("ok");
            $("#mensaje_usu").html("");
        }
    });

    $("#CampoContrasena").on("input", function () {
        if($("#CampoContrasena").val() == "") {
            $("#CampoContrasena").addClass("error");
            $("#CampoContrasena").removeClass("ok");
            $("#mensaje_con").html("Debe indicar alguna contraseña.");
        } else {
            $("#CampoContrasena").removeClass("error");
            $("#CampoContrasena").addClass("ok");
            $("#mensaje_con").html("");
        }
    });
});

var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(rut) == digv);
    },
    dv: function (T) {
        var M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}