<?php
	/*
	 _
	|_) _ _  _ _|_. _ _					  	Copyright (C) 2020
	|  | (_|(_  | |(_(_) 				  	John F. Arroyave Gutiérrez
	  www.practico.org					  	unix4you2@gmail.com
                                            All rights reserved.
    
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, this
       list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice,
       this list of conditions and the following disclaimer in the documentation
       and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	
			/*
			Title: Funciones personalizadas
			Ubicacion *[/personalizadas_pos.php]*.  Archivo que contiene la declaracion de variables y funciones por parte del usuario o administrador del sistema que deben ser cargadas justo antes de finalizar la aplicacion

			Codigo de ejemplo:
				(start code)
					<?php if ($PCO_Accion=="Mi_accion_XYZ") 
						{
							// Mis operaciones a realizar
						}
					?>
				(end)

			Comentario:
			Agregue en este archivo las funciones o acciones que desee vincular a menues especificos o realizacion de operaciones internas.
			Utilice el condicional para diferenciar la accion recibida y ser asi ejecutada. Puede vincularlos mediante forms.

            Por favor considere la construccion de un nuevo modulo antes que implementar rutinas sobre este archivo
            Please consider to build a new module before to deploy rutines in this file
            */

if ($PCO_Accion=="Mi_AccionPoscarga_XYZ") 
	{


	}
	
if ($PCO_Accion=="PruebaDT") 
	{
?>
<a href="http://192.168.0.63/practico/index.php?PCO_Accion=PruebaDT">http://192.168.0.63/practico/index.php?PCO_Accion=PruebaDT</a>
<table id='empTable' class='display dataTable'>
<thead>
<tr>
<th>id</th>
<th>empresa</th>
<th>documento</th>
<th>tipo_identificacion</th>
<th>digito_verificacion</th>
<th>nombre</th>
<th>direccion</th>
<th>genero</th>
<th>departamento</th>
<th>municipio</th>
<th>tel_residencia</th>
<th>tel_movil</th>
<th>tel_trabajo</th>
<th>fecha_nacimiento</th>
<th>correo</th>
<th>correo_empresa</th>
<th>ubicacion_fisica</th>
<th>notas</th>
<th>estado</th>
<th>salario</th>
<th>cuenta_numero</th>
<th>cuenta_entidad</th>
<th>cuenta_tipo</th>
<th>cargo</th>
<th>entidad_eps</th>
<th>codigo_eps</th>
<th>entidad_afp</th>
<th>codigo_afp</th>
<th>tipo_vinculacion</th>
<th>fecha_primer_ingreso</th>
<th>fecha_ultimo_retiro</th>
<th>extension</th>
<th>area</th>
<th>sede</th>
<th>id_sede</th>
<th>usuario</th>
<th>jefe_inmediato</th>
<th>estrato</th>
<th>grupo_etnico</th>
<th>condicion_discapacidad</th>
<th>escolaridad</th>
<th>rh</th>
<th>nro_hijos</th>
<th>estado_civil</th>
<th>turno</th>
<th>perfil_cargo</th>
<th>cumple_sgsst</th>
<th>talla_camisa</th>
<th>talla_pantalon</th>
<th>talla_zapatos</th>
<th>es_responsable_sgsst</th>
</tr>
</thead>
</table>


<script language="javascript">
    
    
$(document).ready(function(){
   $('#empTable').DataTable({
      'processing': true,
      'serverSide': true,
      'serverMethod': 'post',
      'responsive':true,

      'ajax': {
          'url':'/practico/index.php?PCO_Accion=recordset_json&Presentar_FullScreen=1&Precarga_EstilosBS=0'
      },

      'columns': [
            { data: 'id' } ,
            { data: 'empresa' } ,
            { data: 'documento' } ,
            { data: 'tipo_identificacion' } ,
            { data: 'digito_verificacion' } ,
            { data: 'nombre' } ,
            { data: 'direccion' } ,
            { data: 'genero' } ,
            { data: 'departamento' } ,
            { data: 'municipio' } ,
            { data: 'tel_residencia' } ,
            { data: 'tel_movil' } ,
            { data: 'tel_trabajo' } ,
            { data: 'fecha_nacimiento' } ,
            { data: 'correo' } ,
            { data: 'correo_empresa' } ,
            { data: 'ubicacion_fisica' } ,
            { data: 'notas' } ,
            { data: 'estado' } ,
            { data: 'salario' } ,
            { data: 'cuenta_numero' } ,
            { data: 'cuenta_entidad' } ,
            { data: 'cuenta_tipo' } ,
            { data: 'cargo' } ,
            { data: 'entidad_eps' } ,
            { data: 'codigo_eps' } ,
            { data: 'entidad_afp' } ,
            { data: 'codigo_afp' } ,
            { data: 'tipo_vinculacion' } ,
            { data: 'fecha_primer_ingreso' } ,
            { data: 'fecha_ultimo_retiro' } ,
            { data: 'extension' } ,
            { data: 'area' } ,
            { data: 'sede' } ,
            { data: 'id_sede' } ,
            { data: 'usuario' } ,
            { data: 'jefe_inmediato' } ,
            { data: 'estrato' } ,
            { data: 'grupo_etnico' } ,
            { data: 'condicion_discapacidad' } ,
            { data: 'escolaridad' } ,
            { data: 'rh' } ,
            { data: 'nro_hijos' } ,
            { data: 'estado_civil' } ,
            { data: 'turno' } ,
            { data: 'perfil_cargo' } ,
            { data: 'cumple_sgsst' } ,
            { data: 'talla_camisa' } ,
            { data: 'talla_pantalon' } ,
            { data: 'talla_zapatos' } ,
            { data: 'es_responsable_sgsst' },
      ],

   });
});    
    
    
</script>






<?php
	}

if ($PCO_Accion=="PruebaDT2") 
	{
	    echo '<a href="http://192.168.0.63/practico/index.php?PCO_Accion=PruebaDT2">http://192.168.0.63/practico/index.php?PCO_Accion=PruebaDT2</a>';

        PCO_CargarInforme("113");  //Select *
        //PCO_CargarInforme("114");  //Select lista campos

	}
?>