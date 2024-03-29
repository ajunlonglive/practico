<?php
	/*
	 _
	|_) _ _  _ _|_. _ _					  	Copyright (C) 2012-2022
	|  | (_|(_  | |(_(_) 				  	John F. Arroyave Gutiérrez
	  www.practico.org					  	unix4you2@gmail.com
                                            All rights reserved.
    
	 This program is free software: you can redistribute it and/or modify
	 it under the terms of the GNU General Public License as published by
	 the Free Software Foundation, either version 3 of the License, or
	 (at your option) any later version.

	 This program is distributed in the hope that it will be useful,
	 but WITHOUT ANY WARRANTY; without even the implied warranty of
	 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 GNU General Public License for more details.

	 You should have received a copy of the GNU General Public License
	 along with this program.  If not, see <http://www.gnu.org/licenses/>
	 
	            --- TRADUCCION NO OFICIAL DE LA LICENCIA ---

     Esta es una traducción no oficial de la Licencia Pública General de
     GNU al español. No ha sido publicada por la Free Software Foundation
     y no establece los términos jurídicos de distribución del software 
     publicado bajo la GPL 3 de GNU, solo la GPL de GNU original en inglés
     lo hace. De todos modos, esperamos que esta traducción ayude a los
     hispanohablantes a comprender mejor la GPL de GNU:
	 
     Este programa es software libre: puede redistribuirlo y/o modificarlo
     bajo los términos de la Licencia General Pública de GNU publicada por
     la Free Software Foundation, ya sea la versión 3 de la Licencia, o 
     (a su elección) cualquier versión posterior.

     Este programa se distribuye con la esperanza de que sea útil pero SIN
     NINGUNA GARANTÍA; incluso sin la garantía implícita de MERCANTIBILIDAD
     o CALIFICADA PARA UN PROPÓSITO EN PARTICULAR. Vea la Licencia General
     Pública de GNU para más detalles.

     Usted ha debido de recibir una copia de la Licencia General Pública de
     GNU junto con este programa. Si no, vea <http://www.gnu.org/licenses/>
	*/

    // PREFERENCIAS
	
	PCODER_AbrirDialogoModal("myModalPREFERENCIAS",$MULTILANG_PCODER_Preferencias); ?>

			<div class="row">
				<div class="col-lg-6">
						<label for="tamano_fuente"><?php echo $MULTILANG_PCODER_TamanoFuente; ?></label>
						<select id="tamano_fuente" size="1" class="form-control btn-warning" onchange="CambiarFuenteEditor(this.value)">
						  <option value="10px">10px</option>
						  <option value="11px">11px</option>
						  <option value="12px">12px</option>
						  <option value="13px">13px</option>
						  <option value="14px" selected="selected">14px</option>
						  <option value="16px">16px</option>
						  <option value="18px">18px</option>
						  <option value="20px">20px</option>
						  <option value="24px">24px</option>
						</select>
				</div>
				<div class="col-lg-6">
						<label for="tema_grafico"><?php echo $MULTILANG_PCODER_AparienciaEditor; ?></label>
						<select id="tema_grafico" size="1" class="form-control btn-primary" onchange="CambiarTemaEditor(this.value)">
						  <optgroup label="Brillantes / Bright">
							  <?php
								//Presenta los temas claros disponibles
								for ($i=0;$i<count($PCODER_TemasBrillantes);$i++)
									echo '<option value="ace/theme/'.$PCODER_TemasBrillantes[$i]["Valor"].'">'.$PCODER_TemasBrillantes[$i]["Nombre"].'</option>';
							  ?>
						  </optgroup>
						  <optgroup label="Oscuros / Dark">
							  <?php
								//Presenta los temas claros disponibles
								for ($i=0;$i<count($PCODER_TemasOscuros);$i++)
									{
										$EstadoSeleccionTema="";
										if ($PCODER_TemasOscuros[$i]["Valor"]=="ambiance")
											$EstadoSeleccionTema=" SELECTED ";
										echo '<option value="ace/theme/'.$PCODER_TemasOscuros[$i]["Valor"].'" '.$EstadoSeleccionTema.'>'.$PCODER_TemasOscuros[$i]["Nombre"].'</option>';
									}
							  ?>
						  </optgroup>
						</select>
				</div>
			</div>
			<hr>
			<div class="row">
				<div class="col-lg-6">
						<label for="modo_archivo_preferencias"><?php echo $MULTILANG_PCODER_LenguajeProg; ?></label>
						<select id="modo_archivo_preferencias" size="1" class="form-control btn-info" onchange="CambiarModoEditor(this.value)">
							  <?php
								//Presenta los lenguajes disponibles
								for ($i=0;$i<count($PCODER_Modos);$i++)
									echo '<option value="ace/mode/'.$PCODER_Modos[$i]["Nombre"].'">'.$PCODER_Modos[$i]["Nombre"].'</option>';
							  ?>
						</select>
				</div>
				<div class="col-lg-6">
						<label for="modo_invisibles"><?php echo $MULTILANG_PCODER_VerCaracteres; ?></label>
						<select id="modo_invisibles" size="1" class="form-control btn-default" onchange="CaracteresInvisiblesEditor(this.value)">
							<option value="0"><?php echo $MULTILANG_PCODER_No; ?></option>
							<option value="1"><?php echo $MULTILANG_PCODER_Si; ?></option>
						</select>
				</div>
			</div>
			<hr>
			<div class="row">
				<div class="col-lg-6">
						<label for="verificacion_sintaxis"><?php echo $MULTILANG_PCODER_RevisarSintaxis; ?></label>
						<select id="verificacion_sintaxis" size="1" class="form-control btn-success" onchange="VerificarSintaxisEditor(this.value)">
							<option value="0"><?php echo $MULTILANG_PCODER_No; ?></option>
							<option value="1"><?php echo $MULTILANG_PCODER_Si; ?></option>
						</select>
				</div>
				<div class="col-lg-6">
					<!--
						<label for="verificacion_autocompletado"><?php echo $MULTILANG_PCODER_RevisarSintaxis; ?></label>
						<select id="verificacion_autocompletado" size="1" class="form-control btn-success" onchange="VerificarAutocompletadoEditor(this.value)">
							<option value="0"><?php echo $MULTILANG_PCODER_No; ?></option>
							<option value="1"><?php echo $MULTILANG_PCODER_Si; ?></option>
						</select>
					-->
				</div>
			</div>
    <?php 
        $barra_herramientas_modal='
        <button type="button" class="btn btn-default" data-dismiss="modal">'.$MULTILANG_PCODER_Cerrar.' {<i class="fa fa-keyboard-o"></i> Esc}</button>';
        PCODER_CerrarDialogoModal($barra_herramientas_modal);