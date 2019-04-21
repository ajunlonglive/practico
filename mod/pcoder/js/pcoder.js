// INICIO FUNCIONES RETOMADAS DE PRACTICO FRAMEWORK #################################################################
//###################################################################################################################
function PCO_ObtenerContenidoAjax(PCO_ASINCRONICO,PCO_URL,PCO_PARAMETROS)
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
			{   // codigo for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			}
		else
			{   // codigo for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}

		//funcion que se llama cada vez que cambia la propiedad readyState
		xmlhttp.onreadystatechange=function()
			{
				//readyState 4: peticion finalizada y respuesta lista
				//status 200: OK
				if (xmlhttp.readyState===4 && xmlhttp.status===200)
					{
						contenido_recibido=xmlhttp.responseText;
						contenido_recibido = contenido_recibido.trim();
						//Cuando es asincronico devuelve la respuesta cuando este lista
						if(PCO_ASINCRONICO==1)
							return contenido_recibido;
					}
			};

		/* open(metodo, url, asincronico)
		* metodo: post o get
		* url: localizacion del archivo en el servidor
		* asincronico: comunicacion asincronica true o false.*/
		if(PCO_ASINCRONICO==1)
			xmlhttp.open("POST",PCO_URL,true);
		else
			xmlhttp.open("POST",PCO_URL,false);

		//establece el header para la respuesta
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		//enviamos las variables al archivo get_combo2.php
		//xmlhttp.send();
		xmlhttp.send(PCO_PARAMETROS);
		
		//Cuando la solicitud es asincronica devuelve el resultado al momento de llamado
		if(PCO_ASINCRONICO==0)
			return contenido_recibido;
	}
function PCOJS_MostrarMensaje(TituloPopUp, Mensaje)
	{
		//Lleva los valores a cada parte del dialogo modal
		$('#PCO_Modal_MensajeTitulo').html(TituloPopUp);
		$('#PCO_Modal_MensajeCuerpo').html(Mensaje);

		// Se muestra el cuadro modal
		$('#PCO_Modal_Mensaje').modal('show');

		//Hacer que la ventana este siempre por encima
		$("#PCO_Modal_Mensaje").css("z-index", "1500");
	}
function PCO_MostrarMensajeCargandoSimple(MiliSegundos)
	{
		// Se muestra el cuadro modal
		$('#PCO_Modal_MensajeCargandoSimple').modal('show');

		//Hacer que la ventana este siempre por encima
		$("#PCO_Modal_MensajeCargandoSimple").css("z-index", "1500");
		
		//Si recibe un valor de segundos diferente de cero entonces programa el cierre automatico
		if (MiliSegundos!=0)
			setTimeout(function(){PCOJS_OcultarMensajeCargandoSimple()},MiliSegundos);
	}

function PCO_OcultarMensajeCargandoSimple()
	{
		// Se oculta el cuadro modal
		$('#PCO_Modal_MensajeCargandoSimple').modal('hide');
		$('#PCO_Modal_MensajeCargandoSimple').hide();
	}	
	
function PCOJS_ActualizarComboBox(ObjetoListaOpciones)
    {
		//Actualiza el listpicker y sus opciones identificado por el nombre del campo o id
		var PCO_NombreCombo="#"+ObjetoListaOpciones;  // ALTERADA DESDE FUNCION ORIGINAL DE PRACTICO
		$(PCO_NombreCombo).selectpicker("refresh");
    }

function PCOJS_LimpiarComboBox(ObjetoListaOpciones)
    {
		//Limpia una lista de seleccion determinada por su propiedad de ID
        document.getElementById(ObjetoListaOpciones).options.length=0;
        //Despues de limpiar un combo obliga a su actualizacion visual
        PCOJS_ActualizarComboBox(ObjetoListaOpciones);
    }

function PCOJS_AgregarOpcionComboBox(ObjetoListaOpciones,ValorOpcion,EtiquetaOpcion)
    {
		//Determina el ID del objeto para realizar la operacion
		var IDObjetoListaOpciones = document.getElementById(ObjetoListaOpciones);
		//Agrega el elemento
		var PCOEtiqueta_option = document.createElement("option");
		PCOEtiqueta_option.value = ValorOpcion;
		PCOEtiqueta_option.text = EtiquetaOpcion;
		IDObjetoListaOpciones.add(PCOEtiqueta_option);
    }

function PCOJS_OpcionesCombo_DesdeCSV(ObjetoListaOpciones,Cadena,SeparadorLineas)
    {
		//Toma los valores contenidos en una cadena y los convierte en opciones de combo
		var ContadorOpciones;
		ArregloOpciones = Cadena.split(SeparadorLineas);
        for (ContadorOpciones in ArregloOpciones) 
			PCOJS_AgregarOpcionComboBox(ObjetoListaOpciones,ArregloOpciones[ContadorOpciones],ArregloOpciones[ContadorOpciones]);
        //Obliga a una actualizacion de la lista despues de agregar todos los elementos
        PCOJS_ActualizarComboBox(ObjetoListaOpciones);
    }

// FIN FUNCIONES RETOMADAS DE PRACTICO FRAMEWORK ####################################################################
//###################################################################################################################




function CambiarFuenteEditor(tamano)
	{
		//Cambia la fuente del editor al tamano recibido
		editor.setFontSize(tamano);
		try
			{
				EditorClonado.setFontSize(tamano);
			}
		catch(error) {}
	}


function CambiarTemaEditor(tema)
	{
		//Cambia la apariencia grafica del editor
		editor.setTheme(tema);
		try
			{
				EditorClonado.setTheme(tema);
			}
		catch(error) {}
	}


function CambiarModoEditor(modo)
	{
		var ModoFiltrado = modo.replace(/_/g, " ");
		ModoFiltrado = ModoFiltrado.toLowerCase();
		//Cambia el modo de sintaxis y errores resaltado por el editor
		editor.getSession().setMode(ModoFiltrado);

		//Actualiza las listas de seleccion con el modo correspondiente
		document.getElementById("modo_archivo_preferencias").value=modo;
		document.getElementById("modo_archivo_top").value=modo;
		try
			{
				EditorClonado.getSession().setMode(ModoFiltrado);
			}
		catch(error) {}
	}


function CaracteresInvisiblesEditor(estado)
	{
		//Cambia el modo del editor para mostrar (true) u ocultar (false) los caracteres invisibles
		if (estado==0)
			editor.setShowInvisibles(false);
		else
			editor.setShowInvisibles(true);
	}


function IntercambiarAutocompletadoEditor(estado)
	{
		//Cambia el la verificacion de sintaxis del editor
		if (estado==0)
			{
				//editor.setOptions(enableLiveAutocompletion: false})
				 editor.session.setOption("enableBasicAutocompletion", false);
				 editor.session.setOption("enableSnippets", false);
				 editor.session.setOption("enableLiveAutocompletion", false);
			}
		else
			{
				editor.session.setOption("enableBasicAutocompletion", true);
				editor.session.setOption("enableSnippets", true);
				editor.session.setOption("enableLiveAutocompletion", true);
			}
	}


function IntercambiarEstadoCaracteresInvisibles()
	{
		//InterCambia el modo del editor para mostrar (true) u ocultar (false) los caracteres invisibles segun su estado actual
		if (editor.getShowInvisibles()==true)
			{
				editor.setShowInvisibles(false);
				EditorClonado.setShowInvisibles(false);
			}
		else
			{
				editor.setShowInvisibles(true);
				EditorClonado.setShowInvisibles(true);
			}
	}


function VerificarSintaxisEditor()
	{
		//Cambia la verificacion de sintaxis del editor
		if (document.getElementById("Check_VerificarSintaxisEditor").value=="1")
			{
				editor.session.setOption("useWorker", false);
				EditorClonado.session.setOption("useWorker", false);
				document.getElementById("Check_VerificarSintaxisEditor").value="0";
				$('#Check_VerificarSintaxisEditor').prop('checked', false);
			}
		else
			{
				editor.session.setOption("useWorker", true);
				EditorClonado.session.setOption("useWorker", true);
				document.getElementById("Check_VerificarSintaxisEditor").value="1";
				$('#Check_VerificarSintaxisEditor').prop('checked', true);
			}
	}


function VerificarAutocompletado()
	{
		//Cambia el autocompletado del editor
		if (document.getElementById("Check_VerificarAutocompletado").value=="1")
			{
				editor.setOptions({enableBasicAutocompletion: false, enableLiveAutocompletion: false});
				EditorClonado.setOptions({enableBasicAutocompletion: false, enableLiveAutocompletion: false});
				//EditorClonado.session.setOption("useWorker", false);
				document.getElementById("Check_VerificarAutocompletado").value="0";
				$('#Check_VerificarAutocompletado').prop('checked', false);
			}
		else
			{
				editor.setOptions({enableBasicAutocompletion: true, enableLiveAutocompletion: true});
				EditorClonado.setOptions({enableBasicAutocompletion: true, enableLiveAutocompletion: true});
				//EditorClonado.session.setOption("useWorker", true);
				document.getElementById("Check_VerificarAutocompletado").value="1";
				$('#Check_VerificarAutocompletado').prop('checked', true);
			}
	}


function IntercambiarVisibilidadNumerosDeLinea()
	{
		//InterCambia el modo del editor para mostrar (true) u ocultar (false) los numeros de linea
		if (editor.renderer.getShowGutter()==true)
			{
				editor.renderer.setShowGutter(false);
				EditorClonado.renderer.setShowGutter(false);
			}
		else
			{
				editor.renderer.setShowGutter(true);
				EditorClonado.renderer.setShowGutter(true);
			}
	}


function ActivarBuscadorArchivos()
	{
		//InterCambia la visibilidad del buscador
		if (BuscadorArchivosVisible==1)
			{
				$("#contenedor_buscador_archivos").css("display", "none");
				$("#marco_explorador").show();
				$("#marco_operaciones_archivos").show();
				BuscadorArchivosVisible=0;
			}
		else
			{
				$("#contenedor_buscador_archivos").css("display", "block");
				$("#marco_explorador").hide();
				$("#marco_operaciones_archivos").hide();
				BuscadorArchivosVisible=1;
			}
	}


function LanzarBusquedaArchivos()
	{
		//Verifica que se tenga un Path para buscar, en caso que la ultima selecciona haya sido sobre un archivo asigna el path del combo
		if (UltimaCarpetaSeleccionada=="")
			UltimaCarpetaSeleccionada=document.getElementById("path_exploracion_archivos").value;

		//Determina estado del check
		if ($('#SensibleMayuscula').is(":checked"))
			SensibleMayuscula=1;
		else
			SensibleMayuscula=0;

		//Llama al buscador de archivos con los parametros requeridos
		ResultadoBuscador=PCO_ObtenerContenidoAjax(0,"mod/buscador/index.php","DirectorioExploracion="+UltimaCarpetaSeleccionada+"&PatronBusqueda="+document.FormBuscadorArchivos.archivo_busqueda.value+"&SensibleMayuscula="+SensibleMayuscula);
		//$('#resultados_buscador_archivo').html("<ul>"+ResultadoBuscador+"</ul>");
		$('#resultados_buscador_archivo').html(ResultadoBuscador);
	}


function ActualizarTituloEditor(titulo)
	{
		//Cambia el titulo presentado en la ventada del editor
		document.title = titulo;
		$(document).attr('title',titulo);
	}


function SaltarALinea()
	{
		//Salta a una linea especifica del editor
		var linea = document.getElementById("linea_salto").value;
		//Valida que se tenga un valor de linea y que este en un rango valido
		if (linea!="" && linea>0)
			{
				editor.gotoLine(linea, 0, true);
				document.getElementById("linea_salto").value="";			
			}
	}


function QuitarAvisoAlmacenamiento()
	{
		//Deja el mensaje de almacenamiento al menos un segundo (para archivos pequenos almacenados rapido), luego lo oculta
		setTimeout(PCO_OcultarMensajeCargandoSimple, 500);
		
		//TODO: Devolver el foco al editor
		//editor.focus();											//Establece el foco al editor
		//$('#editor_codigo').trigger('click');
	}


function Guardar()
	{
		var MensajeErrorAlmacenamiento="";
		//Si se trata del archivo demo
		if (document.form_archivo_editado.PCODER_archivo.value == "demos/demo.txt")
			MensajeErrorAlmacenamiento=MULTILANG_PCODER_ErrGuardarDefecto;
		//Verifica permisos
		if (ListaArchivos[IndiceArchivoActual].PermisosRW!="1")
			MensajeErrorAlmacenamiento=MULTILANG_PCODER_ErrGuardarNoPermiso;
			
		//Ejecuta el proceso de almacenamiento
		if (MensajeErrorAlmacenamiento == "")
			{
                //Actualiza el textareacon el valor del textarea a enviar con el valor del textarea en el indice
                // 			document.getElementById("PCODER_AreaTexto"+IndiceArchivoActual).value=editor.getSession().getValue();
                
                // 		//Actualiza el Textarea y formulario base del editor
                // 		document.form_archivo_editado.PCODER_archivo.value=ListaArchivos[IndiceRecibido].RutaDocumento;
                // 		document.form_archivo_editado.PCODER_TokenEdicion.value=ListaArchivos[IndiceRecibido].TokenEdicion;
                // 		document.form_archivo_editado.PCODER_AreaTexto.value=document.getElementById("PCODER_AreaTexto"+IndiceRecibido).value;
			
				//Metodo estandar, envia todo sobre el iframe para evitar recargar la pagina
				PCO_MostrarMensajeCargandoSimple();
				document.form_archivo_editado.submit();
			}
		else
			{
				PCOJS_MostrarMensaje(MULTILANG_PCODER_Guardando+": "+MULTILANG_PCODER_Error,MensajeErrorAlmacenamiento);			
			}
	}


function PCO_VentanaPopup(theURL,winName,features)
	{ 
		window.open(theURL,winName,features);
	}


function PCO_AgregarElementoDiv(marco,elemento)
	{
		//carga dinamicamente objetos html a marcos
		var capa = document.getElementById(marco);
		var zona = document.createElement("NuevoElemento");
		zona.innerHTML = elemento;
		capa.appendChild(zona);
	}


//###################################################################################################################
//###################################################################################################################
function EjecutarOperacionFS()
	{
		//Toma los valores de parametros de la ventana de operaciones FS, valida y hace el llamado a la operacion
		var path_operacion_elemento=document.getElementById("path_operacion_elemento").value;
		var operacion_fs=document.getElementById("operacion_fs").value;
		var nombre_elemento=document.getElementById("nombre_elemento").value;
		var permisos_elemento=document.getElementById("permisos_elemento").value;
		var propietario_elemento=document.getElementById("propietario_elemento").value;
		
		//CREAR ARCHIVO
			if (operacion_fs=="CrearArchivo")
				{
					ResultadoOperacion=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCODER_CrearArchivo&PCODER_ElementoFS="+path_operacion_elemento+"/"+nombre_elemento);
					if (ResultadoOperacion==1)
						{
							PCOJS_MostrarMensaje(MULTILANG_PCODER_Finalizado, MULTILANG_PCODER_ElementoCreado);
							//Recarga la lista de archivos en el explorador para reflejar el nuevo elemento
							ExplorarPath();
							//Oculta el marco de operaciones FS
							$('#myModalOPERARFS').modal('hide');
							//Carga el archivo recien creado para su edicion
							PCODER_CargarArchivo(path_operacion_elemento+"/"+nombre_elemento);
						}
					if (ResultadoOperacion==-1)
						{
							PCOJS_MostrarMensaje(MULTILANG_PCODER_Error, MULTILANG_PCODER_ElementoExiste);
						}
					if (ResultadoOperacion==-2)
						{
							PCOJS_MostrarMensaje(MULTILANG_PCODER_Error, MULTILANG_PCODER_ElementoNoCreado);
						}
				}

		//CREAR CARPETA
			if (operacion_fs=="CrearCarpeta")
				{
					ResultadoOperacion=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCODER_CrearCarpeta&PCODER_ElementoFS="+path_operacion_elemento+"/"+nombre_elemento);
					if (ResultadoOperacion==1)
						{
							PCOJS_MostrarMensaje(MULTILANG_PCODER_Finalizado, MULTILANG_PCODER_ElementoCreado);
							//Recarga la lista de archivos en el explorador para reflejar el nuevo elemento
							ExplorarPath();
							//Oculta el marco de operaciones FS
							$('#myModalOPERARFS').modal('hide');
						}
					if (ResultadoOperacion==-1)
						{
							PCOJS_MostrarMensaje(MULTILANG_PCODER_Error, MULTILANG_PCODER_ElementoExiste);
						}
					if (ResultadoOperacion==-2)
						{
							PCOJS_MostrarMensaje(MULTILANG_PCODER_Error, MULTILANG_PCODER_ElementoNoCreado);
						}
				}

		//EDITAR PERMISOS
			if (operacion_fs=="EditarPermisos")
				{
					ResultadoOperacion=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCODER_EditarPermisos&PCODER_ElementoFS="+path_operacion_elemento+"&PCODER_PropietarioFS="+propietario_elemento+"&PCODER_PermisosFS="+permisos_elemento);
					if (ResultadoOperacion==1)
						{
							PCOJS_MostrarMensaje(MULTILANG_PCODER_Finalizado, MULTILANG_PCODER_ElementoCreado);
							//Oculta el marco de operaciones FS
							$('#myModalOPERARFS').modal('hide');
						}
					else
						{
							PCOJS_MostrarMensaje(MULTILANG_PCODER_Error, MULTILANG_PCODER_ElementoNoCreado);
						}
				}

		//ELIMINAR ELEMENTO
			if (operacion_fs=="EliminarElemento")
				{
					//Determina el tipo de elemento a eliminar
					PCODER_TipoElementoFS="archivo";
					if (UltimaCarpetaSeleccionada!="")
						PCODER_TipoElementoFS="carpeta";
					ResultadoOperacion=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCODER_EliminarElemento&PCODER_ElementoFS="+path_operacion_elemento+"&PCODER_TipoElementoFS="+PCODER_TipoElementoFS);
					if (ResultadoOperacion==1)
						{
							PCOJS_MostrarMensaje(MULTILANG_PCODER_Finalizado, MULTILANG_PCODER_Eliminado);
							//Recarga la lista de archivos en el explorador para reflejar el nuevo elemento
							ExplorarPath();
							//Oculta el marco de operaciones FS
							$('#myModalOPERARFS').modal('hide');
						}
					else
						{
							PCOJS_MostrarMensaje(MULTILANG_PCODER_Error, MULTILANG_PCODER_ElementoNoCreado);
						}
				}
	}


function OperacionFS_CrearArchivo()
	{
		//Presenta el cuadro de dialogo
		$('#myModalOPERARFS').css('z-index', '500');	//Asigna un index inferior a los dialogos emergentes de resultado
		$('#myModalOPERARFS').modal('show');
		
		//Asigna valores por defecto a algunos campos y controles
		document.getElementById('nombre_elemento').value='';
		document.getElementById('operacion_fs').value='CrearArchivo';
		document.getElementById('permisos_elemento').value=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerPermisosArchivo&PCODER_archivo="+document.getElementById('nombre_elemento').value);
		document.getElementById('propietario_elemento').value=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerPropietarioArchivo&PCODER_archivo="+document.getElementById('nombre_elemento').value);

		//Oculta o muestra elementos necesarios segun la operacion
		$('#operacion_fs').attr("disabled", true);
		$("#cuadro_entrada_path_operacion_elemento").show();
		$("#cuadro_entrada_marco_explorador").show();
		$("#cuadro_entrada_operacion_fs").show();
		$("#cuadro_entrada_nombre_elemento").show();
		$("#cuadro_entrada_permisos_elemento").hide();
	}


function OperacionFS_CrearCarpeta()
	{
		//Presenta el cuadro de dialogo
		$('#myModalOPERARFS').css('z-index', '500');	//Asigna un index inferior a los dialogos emergentes de resultado
		$('#myModalOPERARFS').modal('show');
		
		//Asigna valores por defecto a algunos campos y controles
		document.getElementById('nombre_elemento').value='';
		document.getElementById('operacion_fs').value='CrearCarpeta';
		document.getElementById('permisos_elemento').value=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerPermisosArchivo&PCODER_archivo="+document.getElementById('nombre_elemento').value);
		document.getElementById('propietario_elemento').value=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerPropietarioArchivo&PCODER_archivo="+document.getElementById('nombre_elemento').value);

		//Oculta o muestra elementos necesarios segun la operacion
		$('#operacion_fs').attr("disabled", true);
		$("#cuadro_entrada_path_operacion_elemento").show();
		$("#cuadro_entrada_marco_explorador").show();
		$("#cuadro_entrada_operacion_fs").show();
		$("#cuadro_entrada_nombre_elemento").show();
		$("#cuadro_entrada_permisos_elemento").hide();
	}


function OperacionFS_EditarPermisos()
	{
		//Presenta el cuadro de dialogo
		$('#myModalOPERARFS').css('z-index', '500');	//Asigna un index inferior a los dialogos emergentes de resultado
		$('#myModalOPERARFS').modal('show');
		
		//Asigna valores por defecto a algunos campos y controles
		document.getElementById('nombre_elemento').value=UltimaCarpetaSeleccionada+UltimoArchivoSeleccionado;
		document.getElementById('operacion_fs').value='EditarPermisos';
		document.getElementById('permisos_elemento').value=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerPermisosArchivo&PCODER_archivo="+document.getElementById('nombre_elemento').value);
		document.getElementById('propietario_elemento').value=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerPropietarioArchivo&PCODER_archivo="+document.getElementById('nombre_elemento').value);

		//Oculta o muestra elementos necesarios segun la operacion
		$('#operacion_fs').attr("disabled", true);
		$("#cuadro_entrada_path_operacion_elemento").show();
		$("#cuadro_entrada_marco_explorador").hide();
		$("#cuadro_entrada_operacion_fs").show();
		$("#cuadro_entrada_nombre_elemento").hide();
		$("#cuadro_entrada_permisos_elemento").show();
	}


function OperacionFS_EliminarElemento()
	{
		//Presenta el cuadro de dialogo
		$('#myModalOPERARFS').css('z-index', '500');	//Asigna un index inferior a los dialogos emergentes de resultado
		$('#myModalOPERARFS').modal('show');
		
		//Asigna valores por defecto a algunos campos y controles
		document.getElementById('nombre_elemento').value=UltimaCarpetaSeleccionada+UltimoArchivoSeleccionado;
		document.getElementById('operacion_fs').value='EliminarElemento';
		document.getElementById('permisos_elemento').value=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerPermisosArchivo&PCODER_archivo="+document.getElementById('nombre_elemento').value);
		document.getElementById('propietario_elemento').value=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerPropietarioArchivo&PCODER_archivo="+document.getElementById('nombre_elemento').value);

		//Oculta o muestra elementos necesarios segun la operacion
		$('#operacion_fs').attr("disabled", true);
		$("#cuadro_entrada_path_operacion_elemento").show();
		$("#cuadro_entrada_marco_explorador").hide();
		$("#cuadro_entrada_operacion_fs").show();
		$("#cuadro_entrada_nombre_elemento").hide();
		$("#cuadro_entrada_permisos_elemento").hide();
	}


function PCODER_DesactivarPanelIzquierdo()
	{
		AnchoPanelIzquierdo=0;
		$("#panel_izquierdo").removeClass("col-md-2");
		$("#panel_izquierdo").hide();
		PCODER_RecalcularMaquetacion();
	}


function PCODER_DesactivarPanelDerecho()
	{
		AnchoPanelDerecho=0;
		$("#panel_derecho").removeClass("col-md-2");
		$("#panel_derecho").hide();
		PCODER_RecalcularMaquetacion();
	}


function PCODER_RecalcularPanelesLaterales()  //AjustarPanelesLaterales();
	{
		//Redimensiona, ajusta y aplica clases al editor segun el estado de visualizacion las barras laterales
		AnchoPanelCentral=12-AnchoPanelIzquierdo-AnchoPanelDerecho; //Actualiza segun los anchos de cada panel

		//Remueve las clases tipicas de los paneles y aplica las nuevas
		$("#panel_izquierdo").removeClass("col-md-2");
		$("#panel_derecho").removeClass("col-md-2");
		
		//Si el valor es cero entonces se ocultan sino agrega la clase
		if(AnchoPanelIzquierdo==0)
			$("#panel_izquierdo").hide();
		else
			$("#panel_izquierdo").addClass("col-md-"+AnchoPanelIzquierdo);
		if(AnchoPanelDerecho==0)
			$("#panel_derecho").hide();
		else
			$("#panel_derecho").addClass("col-md-"+AnchoPanelDerecho);

		//Remueve las clases tipicas del editor de codigo y aplica la nueva
		$("#panel_central").removeClass("col-md-8"); //Cuando estan los dos paneles activos
		$("#panel_central").removeClass("col-md-10"); //Cuando esta un solo panel activo
		$("#panel_central").removeClass("col-md-12"); //Cuando esta un solo panel activo
		$("#panel_central").addClass("col-md-"+AnchoPanelCentral);
		
		//Reasigna el ALTO de los paneles
		var AltoBotonOcultacionPI = $("#boton_ocultacion_panel_izquierdo").height();
		var AltoComboSeleccionPath = $("#path_exploracion_archivos").height();
		var AltoOperacionesArchivos = $("#marco_operaciones_archivos").height();
		var AltoDisponible_PanelesLateralIzq = $("#panel_central_medio").height() - AltoBotonOcultacionPI - AltoComboSeleccionPath - AltoOperacionesArchivos;
		$('#marco_explorador').height( AltoDisponible_PanelesLateralIzq+"px" ).css({ });		
	}


function PCODER_ActivarPanelIzquierdo()
	{
		AnchoPanelIzquierdo=2;
		$("#panel_izquierdo").show();
		$("#panel_izquierdo").removeClass("col-md-0");
		$("#panel_izquierdo").addClass("col-md-"+AnchoPanelIzquierdo);
		PCODER_RecalcularMaquetacion();
	}	


function PCODER_ActivarPanelDerecho()
	{
		AnchoPanelDerecho=2;
		$("#panel_derecho").show();
		$("#panel_derecho").removeClass("col-md-0");
		$("#panel_derecho").addClass("col-md-"+AnchoPanelDerecho);
		PCODER_RecalcularMaquetacion();
	}


function PCODER_RecalcularPanelesEditores()
	{
		//Define el ALTO Y ANCHO DE LOS EDITORES segun la disposicion visual (splits) y el tamano del panel_central_medio
		var alto_panel_contenedor_archivos = $("#contenedor_archivos").height();
		var alto_contenedor_mensajes_superior = $("#contenedor_mensajes_superior").height();
		var AltoDisponible_Editores = $("#panel_central_medio").height() - alto_panel_contenedor_archivos - alto_contenedor_mensajes_superior;
		var AnchoDisponible_Editores = $("#panel_central_medio").width();

		//Establece tamanos especificos para los editores segun la disposicion visual (splits) y deja visible el editor clonado
		if(ListaArchivos[IndiceArchivoActual].VistaSplit=="H")
			{
				AltoDisponible_Editores=Math.round(AltoDisponible_Editores/2)-1;
				$("#panel_editor_clonado").show();
			}
			
		if(ListaArchivos[IndiceArchivoActual].VistaSplit=="V")
			{
				AnchoDisponible_Editores=Math.round(AnchoDisponible_Editores/2)-2;
				$("#panel_editor_clonado").show();
			}

		//Reasigna los anchos y altos a los paneles por defecto
		AltoEditorReal = AltoDisponible_Editores;
		AnchoEditorReal = AnchoDisponible_Editores;
		AltoEditorClonado = AltoDisponible_Editores;
		AnchoEditorClonado = AnchoDisponible_Editores;
		
		//Si no hay divisiones pone en ceros el editor clonado y ademas oculta el marco que lo contiene
		if(ListaArchivos[IndiceArchivoActual].VistaSplit=="")
			{
				AltoEditorClonado = 0;
				AnchoEditorClonado = 0;
				$("#panel_editor_clonado").hide();
			}
		
		$('#editor_codigo').height( AltoEditorReal+"px" ).css({ });	//Asignacion en porcentaje
		$('#editor_codigo').width( AnchoEditorReal+"px" ).css({ });	//Asignacion en porcentaje
		$('#editor_clonado').height( AltoEditorClonado+"px" ).css({ });	//Asignacion en porcentaje
		$('#editor_clonado').width( AnchoEditorClonado+"px" ).css({ });	//Asignacion en porcentaje
		
		//Actualiza el tamano de los editores segun las nuevas dimensiones
		editor.resize();
		try
			{
				EditorClonado.resize();
			}
		catch(error)
			{
				//document.getElementById("demo").innerHTML = err.message;
			}
	}


function PCODER_DividirPantalla_NO()
	{
		//Ejecuta la operacion si ya no esta dividido
		if (ListaArchivos[IndiceArchivoActual].VistaSplit!="")
			{
				ListaArchivos[IndiceArchivoActual].VistaSplit="";
				//Actualiza el editor
				PCODER_RecalcularMaquetacion();
			}
	}


function PCODER_DividirPantalla_Horizontal()
	{
		//Ejecuta la operacion si ya no esta dividido
		if (ListaArchivos[IndiceArchivoActual].VistaSplit!="H")
			{
				ListaArchivos[IndiceArchivoActual].VistaSplit="H";
				ClonarPropiedadesEditor();
				//Actualiza el editor
				PCODER_RecalcularMaquetacion();
			}
	}


function PCODER_DividirPantalla_Vertical()
	{
		//Ejecuta la operacion si ya no esta dividido
		if (ListaArchivos[IndiceArchivoActual].VistaSplit!="V")
			{
				ListaArchivos[IndiceArchivoActual].VistaSplit="V";
				ClonarPropiedadesEditor();
				//Actualiza el editor
				PCODER_RecalcularMaquetacion();
			}
	}


function PCODER_RecalcularPanelesExtensiones()
	{
		var AltoVentana = $(window).height();
		
		//Define tamanos del iframe para la TERMINAL
		var AltoPanelIFrames = AltoVentana - $("#panel_superior").height() - $("#panel_inferior").height() - $("#panel_central_superior").height();
		$('#frame_terminal').css('height', AltoPanelIFrames+'px');
		$('#frame_terminal').css('width', '100%');

		//Define tamanos del iframe para EXPLORADOR WEB
		$('#frame_explorador').css('height', AltoPanelIFrames+'px');
		$('#frame_explorador').css('width', '100%');

		//Define tamanos del iframe para HERRAMIENTA DIFF
		var AltoPanelIFramesDiff = AltoPanelIFrames - $("#panel_controles_diff").height();
		//alert(AltoPanelIFrames);
		//alert(AltoPanelIFramesDiff);
		$('#frame_diferencias').css('height', AltoPanelIFramesDiff+'px');
		$('#frame_diferencias').css('width', '100%');
	}


function PCODER_RecalcularMaquetacion()   //RedimensionarEditor();
	{
		PCODER_RecalcularPanelesLaterales();

		//Obtiene las dimensiones actuales de la ventana de edicion y algunos objetos
		var AltoVentana = $(window).height();
		var AnchoVentana = $(window).width();
		var AltoDocumento = $(document).height();
		var AnchoDocumento = $(document).width();

		//Obtiene el alto de los diferentes marcos que componen el aplicativo
		var alto_panel_superior = $("#panel_superior").height();
		var alto_panel_central_superior = $("#panel_central_superior").height();
		var alto_panel_central_inferior = $("#panel_central_inferior").height();
		var alto_panel_inferior = $("#panel_inferior").height();

		//Modifica el ALTO DEL PANEL CENTRAL MEDIO
		var PorcentajeOcupacion_PanelesAplicativo = ( alto_panel_superior + alto_panel_central_superior + alto_panel_central_inferior + alto_panel_inferior ) * 100 / AltoVentana;
		var PorcentajeFinal_PanelCentralMedio = 100 - PorcentajeOcupacion_PanelesAplicativo;
		$('#panel_central_medio').height( PorcentajeFinal_PanelCentralMedio+"vh" ).css({ });
		
		PCODER_RecalcularPanelesEditores();
		PCODER_RecalcularPanelesExtensiones();
	}


function IntercambiarPantallaCompleta()
	{
		if (!document.fullscreenElement &&    // alternative standard method
		  !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
			if (document.documentElement.requestFullscreen) {
			  document.documentElement.requestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
			  document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
			  document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
			  document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else {
			if (document.exitFullscreen) {
			  document.exitFullscreen();
			} else if (document.msExitFullscreen) {
			  document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
			  document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
			  document.webkitExitFullscreen();
			}
		}
	}


function AumentarTamanoFuente()
	{
		tamano=editor.getFontSize();
		tamano = tamano.substring(0, tamano.length-2); //Elimina las letras de px al final
		tamano=parseInt(tamano)+2;
		CambiarFuenteEditor(tamano+"px");
	}


function DisminuirTamanoFuente()
	{
		tamano=editor.getFontSize();
		tamano = tamano.substring(0, tamano.length-2); //Elimina las letras de px al final
		tamano=parseInt(tamano)-2;
		CambiarFuenteEditor(tamano+"px");
	}


function ExplorarPath(DesdeOnChange)
	{
		//Si viene desde el OnChange del panel izquierdo asigna la ultima carpeta seleccionada como esta.
		if (DesdeOnChange==1)
			{
				UltimaCarpetaSeleccionada=document.getElementById("path_exploracion_archivos").value;
				UltimoArchivoSeleccionado='';
			}
		
		//Inicializa el explorador de archivos (panel izquierdo)
		$(document).ready( function() {
			$('#marco_explorador').fileTree({ root: path_exploracion_archivos.value, script: '../../inc/jquery/plugins/jquery.fileTree-1.01/connectors/jqueryFileTree.php', folderEvent: 'dblclick' }, function(archivo_seleccionado) {
				PCODER_CargarArchivo(archivo_seleccionado);

				//Simula clic sobre la pestana de archivos para pasar automaticamente a esta vista
				$('#pestana_editor_archivos').trigger('click');
			});
		});
		
		//Inicializa el explorador de archivos (creacion de archivos y carpetas)
		$(document).ready( function() {
			$('#marco_explorador_creacionarchivo').fileTree({ root: path_exploracion_archivos.value, script: '../../inc/jquery/plugins/jquery.fileTree-1.01/connectors/jqueryFileTree.php?nofiles=true' }, function(path_seleccionado_creacion) {
			});
		});
	}


function ActualizarPathActual()
	{
		document.getElementById("path_operacion_elemento").value=UltimaCarpetaSeleccionada+UltimoArchivoSeleccionado;
		//Llama periodicamente la rutina de actualizacion
		window.setTimeout(ActualizarPathActual, 500);
	}


function ActualizarBarraEstado()
	{
		//Actualiza ademas las posiciones del cursor sobre el arreglo de archivos abiertos
		posicion_cursor=editor.getCursorPosition();
		ListaArchivos[IndiceArchivoActual].LineaActual=posicion_cursor.row;
		ListaArchivos[IndiceArchivoActual].ColumnaActual=posicion_cursor.column;

		//Actualiza la barra de estado del editor
		var NroLineasDocumento=editor.session.getLength();
		var NroCaracteresDocumento=editor.session.getValue().length;
		//Actualiza los contenedores con la informacion de estado
		$("#NroLineasDocumento").html(MULTILANG_PCODER_Linea +": " + (ListaArchivos[IndiceArchivoActual].LineaActual+1) +" / "+NroLineasDocumento);
		$("#NroColumnaDocumento").html(MULTILANG_PCODER_Columna +": "+ (ListaArchivos[IndiceArchivoActual].ColumnaActual+1));
		$("#NroCaracteresDocumento").html(MULTILANG_PCODER_Caracteres +": "+NroCaracteresDocumento);
		$("#TipoDocumento").html(MULTILANG_PCODER_Tipo +": "+ListaArchivos[IndiceArchivoActual].TipoDocumento);
		$("#TamanoDocumento").html(MULTILANG_PCODER_Tamano +": <b>"+ListaArchivos[IndiceArchivoActual].TamanoDocumento+" Kb</b>");
		$("#FechaModificadoDocumento").html(MULTILANG_PCODER_Modificado +": <b>"+ListaArchivos[IndiceArchivoActual].FechaModificadoDocumento+"</b>");
		
		//Llama periodicamente la rutina de actualizacion de la barra
		window.setTimeout(ActualizarBarraEstado, 1000);
	}


function AgregarNuevoTextarea(nombre_formulario,nombre_textarea,valor_predeterminado)
	{
		//contenedor.innerHTML = '<textarea name="pepe" rows="5" cols="30"></textarea>';
		elemento_textarea = document.createElement('textarea');
		elemento_textarea.cols = 1;
		elemento_textarea.rows = 1;
		elemento_textarea.name = nombre_textarea;
		elemento_textarea.id = nombre_textarea;	
		elemento_textarea.value = valor_predeterminado;
		nombre_formulario.appendChild(elemento_textarea);
	}


function PCODER_Log(Mensaje)
    {
        console.log(Mensaje);
    }


function PCODER_CambiarArchivoActual(IndiceRecibido,VieneDesdeApertura)
	{
		//Si viene en valor 1 se trata de una apertura de archivo, por lo que no se requiere guardar valores previos.  Si viene en 0 se trata de un cambio de archivo desde la barra y guarda valores previos.
		if(VieneDesdeApertura==0)
	        document.getElementById("PCODER_AreaTexto"+IndiceArchivoActual).value=editor.getSession().getValue();

		//Actualiza el Textarea y formulario base del editor
		document.form_archivo_editado.PCODER_archivo.value=ListaArchivos[IndiceRecibido].RutaDocumento;
		document.form_archivo_editado.PCODER_TokenEdicion.value=ListaArchivos[IndiceRecibido].TokenEdicion;
		document.form_archivo_editado.PCODER_AreaTexto.value=document.getElementById("PCODER_AreaTexto"+IndiceRecibido).value;
		//Actualiza el editor ACE y sus propiedades
		editor.setValue(document.getElementById("PCODER_AreaTexto"+IndiceRecibido).value);
		editor.focus();											//Establece el foco al editor
		editor.gotoLine(ListaArchivos[IndiceRecibido].LineaActual+1, ListaArchivos[IndiceRecibido].ColumnaActual, false);							//Ubica cursor en la linea,columna,sin animacion
		editor.scrollToLine(ListaArchivos[IndiceRecibido].LineaActual+1, true, false, function () {});	//Desplaza archivo hasta la linea, sin centrarla en pantalla, sin animacion
		editor.clearSelection();
		ActualizarTituloEditor("{P} "+ListaArchivos[IndiceRecibido].NombreArchivo);
		//Actualiza el modo de editor solamente si ha cambiado desde el archivo anterior
		if (ListaArchivos[IndiceArchivoActual].ModoEditor!=ListaArchivos[IndiceRecibido].ModoEditor)
			CambiarModoEditor("ace/mode/"+ListaArchivos[IndiceRecibido].ModoEditor);
		
		//Actualiza el indice del archivo de trabajo actual
		IndiceArchivoActual=IndiceRecibido;
		
		//Verifica permisos de escritura en cada cargue de archivo para saber si presenta o no mensaje de advertencia
		ValorPermisosRW=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_VerificarPermisosRW&PCODER_archivo="+ListaArchivos[IndiceRecibido].RutaDocumento);
		if(ValorPermisosRW==0 && ListaArchivos[IndiceRecibido].RutaDocumento!='demos/demo.txt')
			contenedor_mensajes_superior.innerHTML = '<div class="alert alert-warning btn-xs" role="alert" style="margin: 0px; padding: 5px;" ><i class="fa fa-warning"></i> '+'<b>' + MULTILANG_PCODER_ErrorRW + '</b>. ' + MULTILANG_PCODER_Estado + '=' + ListaArchivos[IndiceRecibido].PermisosArchivo+'</div>';
		else
			contenedor_mensajes_superior.innerHTML = '';

	    //Establece de nuevo el historial de deshacer desde la version guardada para el archivo
        editor.getSession().setUndoManager(ListaArchivos[IndiceRecibido].AdministradorDeshacer);
        
        //Actualiza minimap y sus indices de desplazamiento a la ultima ubicacion del archivo
        PCODER_ActualizarMinimap();
        
		//Despues de haber agregado el archivo al arreglo procede a presentarlo en las pestanas
		ActualizarPestanasArchivos();
	}


function PCODER_CerrarArchivo(IndiceRecibido)
	{
		//Limpia todos los campos del vector
		ListaArchivos[IndiceRecibido].TipoDocumento="";
		ListaArchivos[IndiceRecibido].TamanoDocumento="";
		ListaArchivos[IndiceRecibido].FechaModificadoDocumento="";
		ListaArchivos[IndiceRecibido].RutaDocumento="";
		ListaArchivos[IndiceRecibido].TokenEdicion="";
		ListaArchivos[IndiceRecibido].ModoEditor="";
		ListaArchivos[IndiceRecibido].NombreArchivo="";
		ListaArchivos[IndiceRecibido].LineaActual="";
		ListaArchivos[IndiceRecibido].PermisosRW="";
		ListaArchivos[IndiceRecibido].PermisosArchivo="";
		ListaArchivos[IndiceRecibido].VistaSplit="";
		ListaArchivos[IndiceRecibido].AdministradorDeshacer="";

		//Verifica si se trata del archivo actual, si es asi entonces se mueve al primero.Si es el primero entonces se mueve al demo
		if(IndiceRecibido==1)
			IndiceArchivoActual=0;
		else
			{
				if(IndiceRecibido==IndiceArchivoActual)
					IndiceArchivoActual=1;
			}

		ActualizarPestanasArchivos();
		//Se asegura de corregir tamano del editor cuando se actualizan las pestanas

		PCODER_CambiarArchivoActual(IndiceArchivoActual,1);
	}


function PCODER_CerrarArchivoActual()
	{
		PCODER_CerrarArchivo(IndiceArchivoActual);
	}


function PCODER_BuscarArchivoAbierto(path_archivo)
	{
		Encontrado=-1;
		//Determina si el archivo ya esta abierto o no (dentro del arreglo)
		//Retorna -1 si no es encontrado o el indice en caso de existir
		for (i=0;i<IndiceAperturaArchivo;i++)
			{
				if(ListaArchivos[i].RutaDocumento==path_archivo)
					Encontrado=i;
			}
		//Retorna el estado de variable si fue o no encontrado el archivo
		return Encontrado;
	}


function PCODER_ActualizarListaArchivosDiff()
	{
		//Elimina posibles valores de las listas de seleccion
		PCOJS_LimpiarComboBox("archivo_diff_1");
		PCOJS_LimpiarComboBox("archivo_diff_2");
		
		//Carga las listas de seleccion desde la lista de archivos actuales
		ListaArchivosAbiertosDiff="";
		//Recorre arreglo de archivos y regenera las pestanas
		for (i=1;i<IndiceAperturaArchivo;i++)
			{
				//Agrega el elemento simepre y cuando no sea vacio
				if (ListaArchivos[i].NombreArchivo!="")
					ListaArchivosAbiertosDiff=ListaArchivosAbiertosDiff + "|" + ListaArchivos[i].RutaDocumento;
			}		
		
		//Asigna la lista de archivos a las listas de seleccion
		PCOJS_OpcionesCombo_DesdeCSV("archivo_diff_1",ListaArchivosAbiertosDiff,"|");
		PCOJS_OpcionesCombo_DesdeCSV("archivo_diff_2",ListaArchivosAbiertosDiff,"|");
		
		//Actualiza las listas de seleccion
		PCOJS_ActualizarComboBox("archivo_diff_1");
		PCOJS_ActualizarComboBox("archivo_diff_2");
    }


function PCODER_EjecutarDiff()
	{
		//Construye la URL de comparacion de archivos
		Archivo1=document.getElementById("archivo_diff_1").value;
		Archivo2=document.getElementById("archivo_diff_2").value;
		EstiloCSSDiff=document.getElementById("formato_diff").value;
		ModoVisualDiff=document.getElementById("modo_visual_diff").value;
		URL_Diff="mod/php-diff-1.0/generador/index.php?ArchivoViejo="+Archivo1+"&ArchivoNuevo="+Archivo2+"&EstiloCSS="+EstiloCSSDiff+"&ModoVisual="+ModoVisualDiff;
		
		//Actualiza el IFrame con el comparador solo si se han seleccionado dos archivos
		if (Archivo1!="" && Archivo2!="" && Archivo1!=Archivo2)
			PCODER_CargarIframeURL("frame_diferencias", URL_Diff);
    }


function PCODER_CargarIframeURL(iframeName, url)
	{
		//url=url+'&output=embed';
		var $iframe = $('#' + iframeName);
		if ( $iframe.length )
			{
				$iframe.attr('src',url);
				return false;
			}
		return true;
	}


function PCODER_DeshacerEdicion()
	{
        //editor.undo(true);
        editor.getSession().getUndoManager().undo(false); //Si true deshabilita seleccion del texto
    }


function PCODER_RehacerEdicion()
	{
        //editor.redo(true);
        editor.getSession().getUndoManager().redo(false); //Si true deshabilita seleccion del texto
    }


function ActualizarPestanasArchivos()
	{
		var HayArchivosAbiertos=0;
		//Limpia el marco de pestanas
		lista_contenedor_archivos.innerHTML = "";

		//Recorre arreglo de archivos y regenera las pestanas
		for (i=1;i<IndiceAperturaArchivo;i++)
			{
				//Si se trata del primer archivo lo pone como activo en la barra
				ComplementoClase='';
				if (IndiceArchivoActual==i)
					ComplementoClase='class="active"';
				//Agrega el elemento simepre y cuando no sea vacio
				if (ListaArchivos[i].NombreArchivo!="")
					{
						//Construye datos para el ToolTip
						ComplementoTooltip='<i class=\'fa fa-hdd-o\'></i> '+ListaArchivos[i].RutaDocumento+'<br>';
						ComplementoTooltip+='<i class=\'fa fa-key\'></i> '+'Permisos (CHMOD): '+ListaArchivos[i].PermisosArchivo+'<br>';
						//Pestana con nombre de archivo
						lista_contenedor_archivos.innerHTML = lista_contenedor_archivos.innerHTML + '<li '+ComplementoClase+' ><a data-toggle="tooltip" data-html="true" data-placement="bottom" title="'+ComplementoTooltip+'" style="cursor:pointer;" OnClick="PCODER_CambiarArchivoActual('+i+',0);"><i class="fa fa-file-text-o fa-inactive"></i> '+ListaArchivos[i].NombreArchivo+'</a></li>';
						//Boton para cerrar el archivo
						lista_contenedor_archivos.innerHTML = lista_contenedor_archivos.innerHTML + '<li ><a data-toggle="tab" style="cursor:pointer; margin-right: 10px;" OnClick="PCODER_CerrarArchivo('+i+');"><i class="fa fa-times"></i></a></li>';								
						HayArchivosAbiertos=1;
					}

				//Actualiza el Tooltip asociado a la pestana agregada
				RecargarToolTipsEnlaces();
			}

		//Actualiza listas de posibles archivos para herramienta diff
		PCODER_ActualizarListaArchivosDiff();

		//Si encuentra archivos abiertos actualiza el tamaño de la barra con pestanas de archivos, sino la pone en cero
		if(HayArchivosAbiertos==1)
			$('#contenedor_archivos').height( "auto" ).css({ });
		else
			$('#contenedor_archivos').height( "0px" ).css({ });

		//Se asegura de corregir tamano del editor cuando se carga un archivo
		PCODER_RecalcularMaquetacion();
	}


function PCODER_CargarArchivo(path_archivo)
	{
		if (typeof path_archivo == 'undefined') path_archivo="demos/demo.txt";
		
		//Determina si el archivo ya ha sido abierto o no
		BusquedaArchivoAbierto=-1;
		if(IndiceAperturaArchivo>0)
			BusquedaArchivoAbierto=PCODER_BuscarArchivoAbierto(path_archivo);

		//Graba el estado del editor cuando se abre un nuevo archivo y no se trata del demo
		if(IndiceAperturaArchivo!=0)
			document.getElementById("PCODER_AreaTexto"+IndiceArchivoActual).value=editor.getSession().getValue();

		if (BusquedaArchivoAbierto==-1)
			{
				//Busca algunos datos del archivo
				ValorModoEditor=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerModoEditor&PCODER_archivo="+path_archivo);

				//Si el modo es uno de los soportados sigue adelante
				if(ValorModoEditor!="")
					{
						ValorTipoElemento=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerTipoElemento&PCODER_archivo="+path_archivo);
						ValorTamanoDocumento=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerTamanoDocumento&PCODER_archivo="+path_archivo);
						ValorFechaModificadoDocumento=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerFechaElemento&PCODER_archivo="+path_archivo);
						ValorTokenEdicion=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerTokenEdicion&PCODER_archivo="+path_archivo);
						ValorNombreArchivo=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerNombreArchivo&PCODER_archivo="+path_archivo);
						ValorContenidoArchivo=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerContenidoArchivo&PCODER_archivo="+path_archivo);
						ValorPermisosRW=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_VerificarPermisosRW&PCODER_archivo="+path_archivo);
						ValorPermisosArchivo=PCO_ObtenerContenidoAjax(0,"index.php","PCO_Accion=PCOMOD_ObtenerPermisosArchivo&PCODER_archivo="+path_archivo);
						ValorVistaSplit=""; //Valor inicial de la vista dividida (sin dividir)
						ValorAdministradorDeshacer=new ace.UndoManager(); //Inicia un administrador de Deshacer/Hacer especifico para el archivo
						ValorInicioLineaRenderizadaMiniMap=0; //Inicia un administrador de Deshacer/Hacer especifico para el archivo

						//Agrega nuevo elemento al arreglo
						ListaArchivos[IndiceAperturaArchivo] = {    TipoDocumento: ValorTipoElemento, 
						                                            TamanoDocumento: ValorTamanoDocumento,
						                                            FechaModificadoDocumento: ValorFechaModificadoDocumento,
						                                            RutaDocumento: path_archivo,
						                                            TokenEdicion: ValorTokenEdicion,
						                                            ModoEditor: ValorModoEditor,
						                                            NombreArchivo: ValorNombreArchivo,
						                                            LineaActual: 1,
						                                            ColumnaActual: 0,
						                                            PermisosRW: ValorPermisosRW,
						                                            PermisosArchivo: ValorPermisosArchivo,
						                                            VistaSplit: ValorVistaSplit,
						                                            AdministradorDeshacer: ValorAdministradorDeshacer,
						                                            InicioLineaRenderizadaMiniMap: ValorInicioLineaRenderizadaMiniMap
						                                       };
						
						//Crea dinamicamente el textarea con el numero de indice y con su valor predeterminado
						AgregarNuevoTextarea(document.form_textareas_archivos,"PCODER_AreaTexto"+IndiceAperturaArchivo,ValorContenidoArchivo);
						
						//Actualiza los indices de posiciones en el vector
						IndiceUltimoArchivoAbierto=IndiceAperturaArchivo;
						IndiceArchivoActual=IndiceAperturaArchivo;
						IndiceAperturaArchivo++;

						//Actualiza todo el editor con el archivo recier cargado
						PCODER_CambiarArchivoActual(IndiceArchivoActual,1);
						CambiarModoEditor("ace/mode/"+ListaArchivos[IndiceArchivoActual].ModoEditor); //Hace cambio forzado de tipo de editor cuando se abre un nuevo archivo
					}
				else
					{
						PCOJS_MostrarMensaje(MULTILANG_PCODER_Error, MULTILANG_PCODER_ExtensionNoSoportada);
					}
			}
		else
			{
			    //Guarda el estado actual de deshacer para el archivo
				PCODER_CambiarArchivoActual(BusquedaArchivoAbierto,0);
			}
	}


function PCODER_ActualizarMinimap()
    {
        //Verifica si realmente se quiere o no usar minimap pues en archivos extensos puede tardar
		if ($('#Check_ActivarMinimap').is(":checked"))
			{
                var AnchoMinimap=320;
                var AltoMinimap=400;
                var LimiteLineasRenderizar=Math.round(AltoMinimap/3);
                var posicion_cursor=editor.getCursorPosition();
                var LineaActualDocumento=posicion_cursor.row;
                var NroLineasDocumentoMinimap=editor.session.getLength();
                var Contexto2DCanvas = document.getElementById('TextoCanvasMinimap').getContext('2d');
        
                //Limpia minimap actual para volver a dibujarlo
                Contexto2DCanvas.clearRect(0, 0, AnchoMinimap, AltoMinimap);
                Contexto2DCanvas.beginPath();
                
                //Determina la linea inicial para renderizar en minimap
                InicioLineaRenderizada=Math.round(LineaActualDocumento-(LimiteLineasRenderizar/2));
                if (InicioLineaRenderizada<0) InicioLineaRenderizada=0;
                else LimiteLineasRenderizar=LimiteLineasRenderizar+(InicioLineaRenderizada);
        
                //Guarda la linea renderizada en minimap en caso de cambiar de archivo
                ListaArchivos[IndiceArchivoActual].InicioLineaRenderizadaMiniMap=InicioLineaRenderizada;
        
                //Lee las lineas deseadas del archivo actual para el minimap
                for (LineaMinimap=0;LineaMinimap<LimiteLineasRenderizar && LineaMinimap<NroLineasDocumentoMinimap;LineaMinimap++)
                    {
                        LineaCodigoMinimap=editor.session.getLine(LineaMinimap+InicioLineaRenderizada);
                        LongitudLinea=LineaCodigoMinimap.length;
                        Contexto2DCanvas.moveTo(5               ,(LineaMinimap)*3);
                        Contexto2DCanvas.lineTo(7               ,(LineaMinimap)*3);
                        if (LongitudLinea>0)
                            {
                                Contexto2DCanvas.moveTo(10                 ,(LineaMinimap)*3);
                                Contexto2DCanvas.lineTo(LongitudLinea+10   ,(LineaMinimap)*3);
                            }
                        Contexto2DCanvas.stroke();
                    }
			}
    }


function PCODER_ObtenerLineaMinimap(Minimap,e)
    {
        var NroLineasDocumentoMinimap=editor.session.getLength();
        var posX = $(Minimap).offset().left, posY = $(Minimap).offset().top;
        //Calcula las coordenadas donde se hizo clic con el raton
        CoordenadaX=e.pageX - posX;
        CoordenadaY=e.pageY - posY;
        //Divide para obtener un numero de linea valido
        LineaMinimap=Math.round(CoordenadaY/3)+1;
        if (LineaMinimap > NroLineasDocumentoMinimap) LineaMinimap = NroLineasDocumentoMinimap;
        return LineaMinimap;
    }

    //Agrega evento basico para realizar desplazamientos segun las coordenadas (solo la Y) donde se haga clic en el minimap 
    $('#TextoCanvasMinimap').click(function(e) {
        //Salta a la linea seleccionada
        editor.gotoLine(PCODER_ObtenerLineaMinimap(this,e)+ListaArchivos[IndiceArchivoActual].InicioLineaRenderizadaMiniMap, 0, true);
        PCODER_ActualizarMinimap();
    });

    //Agrega evento para presentar informacion de salto para el minimap
    $('#TextoCanvasMinimap').mousemove(function(e) {
        var LineaSaltoCalculada=PCODER_ObtenerLineaMinimap(this,e)+ListaArchivos[IndiceArchivoActual].InicioLineaRenderizadaMiniMap;
        //Presenta informacion de linea
        $("#LineaSaltoMinimap").html(LineaSaltoCalculada);
    });


//##############################################################
//###              INICIALIZACION DE VARIABLES               ###
//##############################################################
var ListaArchivos = new Array();															//Contiene la lista de los archivos cargados
var IndiceAperturaArchivo=0;																//Posicion del arreglo sobre la que se desea guardar datos al abrir un archivo
var IndiceUltimoArchivoAbierto=IndiceAperturaArchivo;										//Posicion del arreglo que contiene el ultimo archivo abierto
var IndiceArchivoActual=IndiceAperturaArchivo;												//Posicion del arreglo con los datos del archivo actual
var ValorModoEditor;
var UltimaCarpetaSeleccionada=document.getElementById("path_exploracion_archivos").value;	//Utilizado en modificacion de conector JQueryFileTree para obtener carpeta seleccionada
var UltimoArchivoSeleccionado="";															//Utilizado en modificacion de conector JQueryFileTree para obtener archivo seleccionado
AnchoPanelIzquierdo=0;
AnchoPanelDerecho=0;
BuscadorArchivosVisible=0;

//Evento que quita la barra de progreso de carga para el explorador cada que finaliza el cargue de su IFrame
$('#iframe_marco_explorador').load(function(){
	$('#progreso_marco_explorador').hide();
});

//Incluye extension de lenguaje para ACE
ace.require("ace/ext/language_tools");
// Crea el editor
editor = ace.edit("editor_codigo");
editor.getSession().setUseWorker(true); //Llevar a false para evitar el error 404 para "worker-php.js Failed to load resource: the server responded with a status of 404 (Not Found)"
editor.resize(true);
editor.getSession().setNewLineMode("unix");

//Genera el administrador de deshacer y rehacer por defecto
editor.getSession().setUndoManager(new ace.UndoManager());

//ace.$blockScrolling = Infinity;
//ace.$blockScrolling = 1;
//editor.blockScrolling = Infinity;

//Inicia el primer archivo del arreglo (como demo.txt)
PCODER_CargarArchivo();

// Inicia el editor de codigo con las opciones predeterminadas
CambiarFuenteEditor("13px");
CambiarTemaEditor("ace/theme/ambiance");  //tomorrow_night|twilight|eclipse|ambiance|ETC


//Activa la autocompletacion de codigo y los snippets
editor.setOptions({
	enableBasicAutocompletion: true,
	enableSnippets: true,
	enableLiveAutocompletion: true
});

editor.setAnimatedScroll(true);

//Elimina la visualizacion de margen de impresion
editor.setShowPrintMargin(0);
CaracteresInvisiblesEditor(0);

//En cada evento de cambio actualiza el textarea
editor.getSession().on('change', function(){
  document.getElementById("PCODER_AreaTexto").value=editor.getSession().getValue();
  PCODER_ActualizarMinimap();
});

//Ajusta tamano del editor en cada cambio de tamano de la ventana
$( window ).resize(function() {
	PCODER_RecalcularMaquetacion();
});

// CAPTURA DE EVENTOS DE TECLADO DESDE LA VENTANA  #############################################################
//Captura el evento de Ctrl+S para guardar el archivo
$(window).bind('keydown', function(event) {
	//alert(String.fromCharCode(event.which).toLowerCase());
	if (event.ctrlKey || event.metaKey) {
		switch (String.fromCharCode(event.which).toLowerCase()) {
		case 's':  //<-- Cambiar para otras letras ;)
			event.preventDefault();
			Guardar();
			break;
		case 'o':
			event.preventDefault();
			PCODER_ActivarPanelIzquierdo();
			break;
		case 'q':
			event.preventDefault();
			PCODER_CerrarArchivoActual();
			break;
		case 'z':	//Captura evento y no retorna nada para anular comando
			event.preventDefault();
			break;
		case 'y':	//Captura evento y no retorna nada para anular comando
			event.preventDefault();
			break;
		}
	}
});


// CAPTURA DE EVENTOS DE RATON DESDE EL EDITOR  #############################################################
editor.on("click", function(ev){
    PCODER_ActualizarMinimap();
    });

// CAPTURA DE EVENTOS DE TECLADO DESDE EL EDITOR  #############################################################
editor.commands.addCommand({
		name: 'vermarcoderecho',
		bindKey: {win: 'Ctrl-M', mac: 'Command-Option-M'},
		exec: function(editor) {
			PCODER_ActivarPanelDerecho();
			},
		readOnly: true
	});
editor.commands.addCommand({
		name: 'deshacer',
		bindKey: {win: 'Ctrl-Z', mac: 'Command-Option-Z'},
		exec: function(editor) {
			PCODER_DeshacerEdicion();
			},
		readOnly: true
	});
editor.commands.addCommand({
		name: 'rehacer',
		bindKey: {win: 'Ctrl-Y', mac: 'Command-Option-Y'},
		exec: function(editor) {
			PCODER_RehacerEdicion();
			},
		readOnly: true
	});
editor.commands.addCommand({
		name: 'aumentarfuenteeditor',
		bindKey: {win: 'Ctrl-+', mac: 'Command-Option-+'},
		exec: function(editor) {
			AumentarTamanoFuente();
			},
		readOnly: true
	});
editor.commands.addCommand({
		name: 'disminuirfuenteeditor',
		bindKey: {win: 'Ctrl--', mac: 'Command-Option--'},
		exec: function(editor) {
			DisminuirTamanoFuente();
			},
		readOnly: true
	});


//Genera una nueva sesion del editor ACE
function ClonarSesionEditor(session)
	{
		var s = new ace.EditSession(session.getDocument(), session.getMode());
		s.$foldData = session.$cloneFoldData();
		return s;
	}


//Toma las propiedades del editor principal y las copia en el editor clonado
function ClonarPropiedadesEditor()
	{
		EditorClonado.setAnimatedScroll(editor.getAnimatedScroll());
		EditorClonado.setBehavioursEnabled(editor.getBehavioursEnabled());
		EditorClonado.setOverwrite(editor.getOverwrite());
		EditorClonado.setPrintMarginColumn(editor.getPrintMarginColumn());
		EditorClonado.setScrollSpeed(editor.getScrollSpeed());
		EditorClonado.setShowInvisibles(editor.getShowInvisibles());
		EditorClonado.setShowPrintMargin(editor.getShowPrintMargin());
		EditorClonado.setWrapBehavioursEnabled(editor.getWrapBehavioursEnabled());
		EditorClonado.setTheme(editor.getTheme());
		EditorClonado.setFontSize(editor.getFontSize());
		EditorClonado.renderer.setShowGutter(editor.renderer.getShowGutter());
		
		//Modo de resaltado
		ModoClonado="ace/mode/"+ListaArchivos[IndiceArchivoActual].ModoEditor;
		var ModoFiltrado = ModoClonado.replace(/_/g, " ");
		ModoFiltrado = ModoFiltrado.toLowerCase();
		//Cambia el modo de sintaxis y errores resaltado por el editor
		EditorClonado.getSession().setMode(ModoFiltrado);
	}


//Clona el editor hacia uno nuevo para permitir los split
var NuevaSessionEditor = editor.getSession();
var editor_actual = document.getElementById("editor_codigo");
var parent = editor_actual.parentNode;

var clone = editor_actual.cloneNode();
var EditorClonado = ace.edit("editor_clonado");
EditorClonado.setSession( ClonarSesionEditor(NuevaSessionEditor) );

// FUNCIONES DE INICIALIZACION ###############################################################
	ExplorarPath();
	ActualizarPathActual();
	PCODER_RecalcularMaquetacion();
	window.setTimeout(ActualizarBarraEstado, 1000);