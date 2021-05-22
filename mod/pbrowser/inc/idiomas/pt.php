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
    
		Title: Idioma portugues para modulo de PBrowser
		Ubicacion *[/inc/idioma/pt.php]*.  Incluye la definicion de variables utilizadas para presentar mensajes en el idioma correspondiente
		NOTAS IMPORTANTES:
			* Por cuestiones de rendimiento se recomienda la definicion usando comillas simples.
			* Usar las dobles solo cuando se requieran variables o caracteres especiales.
			* Se pueden definir cadenas en funcion de otras definidas con anterioridad
			* Se puede hacer uso de notacion HTML dentro de las cadenas para dar formato
	*/

	// Cadena que describe el archivo de idioma para su escogencia
	$MULTILANG_DescripcionIdioma='Português - Portuguese (by GoogleTranslator)';

	//Lexico general
	$MULTILANG_PBROWSER_Cerrar='Fechar';
	$MULTILANG_PBROWSER_DireccionWeb='Digite um endereço da web aqui';
	$MULTILANG_PBROWSER_Anonimo='anônimo';
	$MULTILANG_PBROWSER_En='Dentro';
	$MULTILANG_PBROWSER_Entrar='Conecte-se';
	$MULTILANG_PBROWSER_Config='Configurações';

	//Configuraciones de navegacion
	$MULTILANG_PBROWSER_PanelConfig='Opções do navegador';
	$MULTILANG_PBROWSER_ConfigQueHace='O que faz esta definição?';
	$MULTILANG_PBROWSER_ConfigDes='Esta configuração permite que você simular as configurações do navegador que são usados para carregar páginas web e mais coisas como tipo de navegação, codificação de caracteres, etc.';
	$MULTILANG_PBROWSER_MiniformFull='Incluir um formulário para inserir um endereço da web no topo da web';
	$MULTILANG_PBROWSER_RemoverScriptFull='Remover scripts do lado do cliente (ie. JavaScript)';
	$MULTILANG_PBROWSER_CookiesFull='Permitir armazenamento de cookies';
	$MULTILANG_PBROWSER_CookiesOtroFull='Bolinhos de armazenamento para esta sessão única';
	$MULTILANG_PBROWSER_ImagenesFull='Carregar imagens no site';
	$MULTILANG_PBROWSER_ReferenciaFull='Consulte o site real referer';
	$MULTILANG_PBROWSER_Rotate13Full='Use uma codificação ROT13 no endereço';
	$MULTILANG_PBROWSER_Base64Full='Use uma codificação base64 no endereço';
	$MULTILANG_PBROWSER_MetaTagsFull='Evite meta tags';
	$MULTILANG_PBROWSER_TituloFull='Evite título da página';
	$MULTILANG_PBROWSER_NavegandoComo='Você está visitando como usuário';
	$MULTILANG_PBROWSER_ResumenLicencia='Esta ferramenta é um Software Livre sob licença GNU GPL v3-';
	$MULTILANG_PBROWSER_Acerca='Sobre PBrowser';

	//Mensajes de error y varios
	$MULTILANG_PBROWSER_UsuarioClave='Digite seu nome de usuário e senha para';
	$MULTILANG_PBROWSER_Usuario='Do utilizador';
	$MULTILANG_PBROWSER_Clave='Senha';
	$MULTILANG_PBROWSER_ErrorTitulo='Ocorreu um erro ao tentar navegar através do proxy';
	$MULTILANG_PBROWSER_ErrorURL='Erro URL';
	$MULTILANG_PBROWSER_FalloHost='Falha na conexão com o host especificado. Possíveis problemas são de que o servidor não foi encontrado, a conexão expirou, ou a conexão recusada pelo host. Tente se conectar novamente e verifique se o endereço está correto.';
	$MULTILANG_PBROWSER_ListaNegra='A URL que você está tentando acessar está na lista negra por este servidor. Selecione outra URL.';
	$MULTILANG_PBROWSER_URLMala='A URL que você inseriu é mal formado. Por favor verifique se você digitou o URL correto ou não.';
	$MULTILANG_PBROWSER_ErrorRecurso='Erro de Recursos';
	$MULTILANG_PBROWSER_ArchivoGrande='O arquivo você está tentando fazer o download é muito grande.';
	$MULTILANG_PBROWSER_MaximoPosible='Maxiumum tamanho de arquivo permitido é';
	$MULTILANG_PBROWSER_PesoArchivo='Tamanho do arquivo solicitado é ';
	$MULTILANG_PBROWSER_HotLink='Parece que você está tentando acessar um recurso por este proxy de um site remoto. Por razões de segurança, por favor use o formulário abaixo para fazê-lo.';