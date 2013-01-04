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

			/*
				Title: Modulo objetos
				Ubicacion *[/core/objetos.php]*.  Archivo de funciones relacionadas con las operaciones de objetos generados por la herramienta
			*/
?>

<?php



/* ################################################################## */
/* ################################################################## */
	if ($accion=="cargar_objeto")
		{
			/*
				Function: cargar_objeto
				Abre los objetos creados con practico como formularios, informes, etc.

				Variables de entrada:

					objeto - Cadena con la representacion del objeto en formato frm:xxx  inf:xxx   o similares

				Salida:

					Objeto indicado por la variable de entrada cargado en pantalla
			*/

			$mensaje_error="";

			//Divide la cadena de objeto en partes conocidas
			$partes_objeto = explode(":", $objeto);
			if ($partes_objeto[0]!="frm" && $partes_objeto[0]!="inf")
				$mensaje_error="El tipo de objeto ".$partes_objeto[0]." recibido en este comando es desconocido.";

			if ($mensaje_error=="")
				{
					//Si es un formulario lo llama con sus parámetros
					if ($partes_objeto[0]=="frm")
						{
							//Evalua si fueron enviados parametros adicionales
							if ($partes_objeto[2]!="") $en_ventana=$partes_objeto[2]; // indica si es cargado en ventana o escritorio
							if ($partes_objeto[3]!="") $campobase =$partes_objeto[3]; // campo a usar Si se llena el form desde un registro
							if ($partes_objeto[4]!="") $valorbase =$partes_objeto[4]; // valor a comparar para el campo de busqeuda
							cargar_formulario($partes_objeto[1],$en_ventana,$campobase,$valorbase);
						}
					//Si es un informe lo llama con sus parámetros
					if ($partes_objeto[0]=="inf")
						{
							if ($partes_objeto[2]!="") $en_ventana=$partes_objeto[2]; // indica si es cargado en ventana o escritorio
							if ($partes_objeto[3]!="") $formato =$partes_objeto[3]; // Formato: htm, xls
							if ($partes_objeto[4]!="") $estilo =$partes_objeto[4]; // Estilo CSS
							if ($partes_objeto[5]!="") $embebido =$partes_objeto[5]; // Embebido? Si=1, No=0
							cargar_informe($partes_objeto[1],$en_ventana,$formato,$estilo,$embebido);
						}
				}
			else
				{
					echo '<form name="cancelar" action="'.$ArchivoCORE.'" method="POST">
						<input type="Hidden" name="accion" value="Ver_menu">
						<input type="Hidden" name="error_titulo" value="Error en tiempo de ejecuci&oacute;n">
						<input type="Hidden" name="error_descripcion" value="'.$mensaje_error.'">
						</form>
						<script type="" language="JavaScript"> document.cancelar.submit();  </script>';
				}
		}

?>
