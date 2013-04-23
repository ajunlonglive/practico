<?php
	/*
	Copyright (C) 2013  John F. Arroyave Gutiérrez
						unix4you2@gmail.com

	This program is free software; you can redistribute it and/or
	modify it under the terms of the GNU General Public License
	as published by the Free Software Foundation; either version 2
	of the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
	*/
?>

<div align=center>
<table width="700" cellspacing=10>
	<tr>
		<td width=100><img src="../img/practico_login.png" border=0 ALT="Logo Practico" width="116" height="80"></td>
		<td valign=top><font size=2 color=black><br><b>
			[Ejecutando scripts de base de datos (si aplica)]</b><br><br>
		</font></td>
	</tr>
</table>
<hr>

<?php
	// Ejecuta los scripts de creacion de la BD si se requiere
	$total_ejecutadas=0;


	if ($aplicar_script_basedatos)
		{

			include_once("../core/configuracion.php");
			include_once("../core/conexiones.php");
			include_once("../core/comunes.php");

			//Abre el archivo con los queries dependiendo del motor
			$RutaScriptSQL="sql/practico.".$MotorBD;
			$archivo_consultas=fopen($RutaScriptSQL,"r");
			$total_consultas= fread($archivo_consultas,filesize($RutaScriptSQL));
			fclose($archivo_consultas);
 
			$arreglo_consultas = split_sql($total_consultas);
			foreach($arreglo_consultas as $consulta)
				{
					try
						{
							//Cambia el prefijo predeterminado en caso que haya sido personalizado en la instalacion
							$consulta=str_replace("Core_",$TablasCore,$consulta);
							//Cambia parametros iniciales de aplicacion
							$consulta=str_replace("PAR_NombreCortoEmpresa",$NombreCortoEmpresa,$consulta);
							$consulta=str_replace("PAR_NombreAplicacion",$NombreAplicacion,$consulta);
							$consulta=str_replace("PAR_VersionAplicacion",$VersionAplicacion,$consulta);

							//Ejecuta el query
							$consulta_enviar = $ConexionPDO->prepare($consulta);
							$consulta_enviar->execute();
							$total_ejecutadas++;
						}
					catch( PDOException $ErrorPDO)
						{
							echo "<hr><b><font color=red>ATENCION: </font>Error ejecutando la consulta</b> $consulta <b>sobre la base de datos. DETALLES: ".$ErrorPDO->getMessage()."</b>";
							$hay_error=1; //usada globalmente durante el proceso de instalacion
						}
				}

			//Actualiza las llaves de paso de los usuarios insertados
			$consulta="UPDATE ".$TablasCore."usuario SET llave_paso=MD5('".$LlaveDePaso."')";
			$consulta_enviar = $ConexionPDO->prepare($consulta);
			$consulta_enviar->execute();
		}
?>
</div>

<?php
	echo '
	<table width="700" cellspacing=10><tr><td align=left><font size=2 color=black>
		<b>Total consultas ejecutadas:</b> '.$total_ejecutadas.'<br>
		Si esta es una instalaci&oacute;n nueva puede ingresar al sistema mediante las credenciales<b> admin/admin</b> y cambiarlas luego por las que usted desee.<br>
		<br>
		<font size=4 color=red><b>IMPORTANTE:</b></font><br>
		<u><b>Recuerde eliminar por completo el directorio de instalaci&oacute;n (carpeta /ins)</b></u> para evitar que otra persona ejecute nuevamente estos scripts sobre un sistema en producci&oacute;n pudiendo ocasionar alg&uacute;n tipo de da&ntilde;o.
		<br><br>
	<b>Resumen de operaciones ejecutadas</b> (archivo '.$RutaScriptSQL.'):<br>
	<textarea cols="120" rows="7" class="AreaTexto">
		'.$total_consultas.'
	</textarea>
	</td></tr></table>
	';




	abrir_barra_estado();

	if (!$hay_error)
		{
			echo '<form name="continuar" action="../" method="POST" style="display:inline; height: 0px; border-width: 0px; width: 0px; padding: 0; margin: 0;">
				<input type="Hidden" name="accion" value="Terminar_sesion">
				<input type="Submit" class="BotonesEstadoCuidado" value=" Ir a su instalaci&oacute;n de Pr&aacute;ctico " onclick="document.continuar.submit();">
				</form>';
		}

	cerrar_barra_estado();
?>

