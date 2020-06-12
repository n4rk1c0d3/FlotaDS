function ValoresController(opcion) {
	$("#msg").hide();
	$("#msg").removeClass("alert-success").addClass("alert-danger");

	switch(opcion){
	case "list":
		$.ajax({
			type : "post",
			url : "/valores/list",
			success : function(res) {
				$('#valoresTable').bootstrapTable('load', res);
				$('#valoresTable tbody').on('click', 'tr', function () {
					alert("100");
					$("#tramo_id").val($(this).find("td:eq(0)").text());
					$("#origen").val($(this).find("td:eq(1)").text());
					$("#destino").val($(this).find("td:eq(2)").text());
					$("#costo").val($(this).find("td:eq(3)").text());
					$("#cant_pasajeros").val($(this).find("td:eq(4)").text());
					$("#myModal .close").click();
				});
				$("#myModal").modal({show:true});
			},
			error : function() {
				$("#msg").show();
				$("#msg").html("Error en busqueda de valores.")
			}
		});       			
		break;
	case "get":
		$.ajax({
			type : "post",
			url : "/valores/get",
			data : "tramo_id="+$("#tramo_id").val(),
			success : function(res) {
				if (res == null || res == "") {
					$("#msg").show();
					$("#msg").html("No se encontraron registros.");
				} else {	
					$("#tramo_id").val(res.tramo_id);
					$("#origen").val(res.origen);
					$("#destino").val(res.destino);
					$("#costo").val(res.costo);
					$("#cant_pasajeros").val(res.cant_pasajeros);
				}
			},
			error : function() {
				$("#msg").show();
				$("#msg").html("Error en busqueda.");
			}
		});       			
		break;
	case "insert":
		var json = 
			{
				'tramo_id': $("#tramo_id").val(),
				'origen': $("#origen").val(),
				'destino': $("#destino").val(),
				'costo': $("#costo").val(),
				'cant_pasajeros': $("#cant_pasajeros").val()
			};
	
	    var postData = JSON.stringify(json);

	    $.ajax({
			type : "post",
			url : "/valores/insert",
			data : postData,
			contentType : "application/json; charset=utf-8",
	        dataType : "json",
			success : function(res) {
				if (res == 1) {
					$("#msg").removeClass("alert-danger").addClass("alert-success");
					$("#msg").show();
					$("#msg").html("Registro ingresado correctamente.");
				} else {
					$("#msg").show();
					$("#msg").html("No se pudo ingresar el registro.");
				}
			},
			error : function() {
				$("#msg").show();
				$("#msg").html("No se pudo ingresar el registro.");
			}
		});       	
	    break;
	case "update":
		var json = 
			{
			'tramo_id': $("#tramo_id").val(),
			'origen': $("#origen").val(),
			'destino': $("#destino").val(),
			'costo': $("#costo").val(),
			'cant_pasajeros': $("#cant_pasajeros").val() 
			};
		;

	    var postData = JSON.stringify(json);

		$.ajax({
			type : "post",
			url : "/valores/update",
			data : postData,
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function(res) {
				if (res == 1) {
					$("#msg").removeClass("alert-danger").addClass("alert-success");
					$("#msg").show();
					$("#msg").html("Registro modificado correctamente.");
				} else {
					$("#msg").show();
					$("#msg").html("No se pudo modificar el registro.");
				}
			},
			error : function() {
				$("#msg").show();
				$("#msg").html("No se pudo modificar el registro.");
			}
		});       	
    break;
	case "delete":
		$.ajax({
			type : "post",
			url : "/valores/delete",
			data : "tramo_id="+$("#tramo_id").val(),
			success : function(res) {
				if (res == 1) {
					$("#msg").removeClass("alert-danger").addClass("alert-success");
					$("#msg").show();
					$("#msg").html("Registro eliminado correctamente.");
				} else {
					$("#msg").show();
					$("#msg").html("No se pudo eliminar el registro.");
				}
			},
			error : function() {
				$("#msg").show();
				$("#msg").html("No se pudo eliminar el registro.");
			}
		});
		break;
	default:
		$("#msg").show();
		$("#msg").html("Opción incorrecta.");
	}
}