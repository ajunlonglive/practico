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


		Title: Configuracion Proveedores OAuth 1.0 y 2.0
		
		IMPORTANTE: La actualizacion de este archivo se deberia realizar por medio de la ventana de configuracion de la herramienta.  No altere estos valores manualmente a menos que sepa lo que hace.
		
		Ubicacion *[/core/ws_oauth.php]*.  Archivo que contiene la configuracion para autenticaciones externas con proveedores OAuth
	*/

	// Ubicacion de las opciones al login
	$UbicacionProveedoresOAuth='0';

	// Google
	$APIGoogle_ClientId='';
	$APIGoogle_ClientSecret='';
	$APIGoogle_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Google';
	$APIGoogle_Template='';

	// Facebook
	$APIFacebook_ClientId='';
	$APIFacebook_ClientSecret='';
	$APIFacebook_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Facebook';
	$APIFacebook_Template='';

	// Twitter
	$APITwitter_ClientId='';
	$APITwitter_ClientSecret='';
	$APITwitter_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Twitter';
	$APITwitter_Template='';

	// Dropbox
	$APIDropbox_ClientId='';
	$APIDropbox_ClientSecret='';
	$APIDropbox_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Dropbox';
	$APIDropbox_Template='';

	// Flickr
	$APIFlickr_ClientId='';
	$APIFlickr_ClientSecret='';
	$APIFlickr_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Flickr';
	$APIFlickr_Template='';

	// Microsoft
	$APIMicrosoft_ClientId='';
	$APIMicrosoft_ClientSecret='';
	$APIMicrosoft_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Microsoft';
	$APIMicrosoft_Template='';

	// Foursquare
	$APIFoursquare_ClientId='';
	$APIFoursquare_ClientSecret='';
	$APIFoursquare_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Foursquare';
	$APIFoursquare_Template='';

	// Bitbucket
	$APIBitbucket_ClientId='';
	$APIBitbucket_ClientSecret='';
	$APIBitbucket_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Bitbucket';
	$APIBitbucket_Template='';

	// Salesforce
	$APISalesforce_ClientId='';
	$APISalesforce_ClientSecret='';
	$APISalesforce_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Salesforce';
	$APISalesforce_Template='';

	// Yahoo
	$APIYahoo_ClientId='';
	$APIYahoo_ClientSecret='';
	$APIYahoo_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Yahoo';
	$APIYahoo_Template='';

	// Box
	$APIBox_ClientId='';
	$APIBox_ClientSecret='';
	$APIBox_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Box';
	$APIBox_Template='';

	// Disqus
	$APIDisqus_ClientId='';
	$APIDisqus_ClientSecret='';
	$APIDisqus_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Disqus';
	$APIDisqus_Template='';

	// RightSignature
	$APIRightSignature_ClientId='';
	$APIRightSignature_ClientSecret='';
	$APIRightSignature_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=RightSignature';
	$APIRightSignature_Template='';

	// Fitbit
	$APIFitbit_ClientId='';
	$APIFitbit_ClientSecret='';
	$APIFitbit_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Fitbit';
	$APIFitbit_Template='';

	// ScoopIt
	$APIScoopIt_ClientId='';
	$APIScoopIt_ClientSecret='';
	$APIScoopIt_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=ScoopIt';
	$APIScoopIt_Template='';

	// Tumblr
	$APITumblr_ClientId='';
	$APITumblr_ClientSecret='';
	$APITumblr_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Tumblr';
	$APITumblr_Template='';

	// StockTwits
	$APIStockTwits_ClientId='';
	$APIStockTwits_ClientSecret='';
	$APIStockTwits_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=StockTwits';
	$APIStockTwits_Template='';

	// LinkedIn
	$APILinkedIn_ClientId='';
	$APILinkedIn_ClientSecret='';
	$APILinkedIn_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=LinkedIn';
	$APILinkedIn_Template='';

	// Instagram
	$APIInstagram_ClientId='';
	$APIInstagram_ClientSecret='';
	$APIInstagram_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Instagram';
	$APIInstagram_Template='';

	// SurveyMonkey
	$APISurveyMonkey_ClientId='';
	$APISurveyMonkey_ClientSecret='';
	$APISurveyMonkey_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=SurveyMonkey';
	$APISurveyMonkey_Template='';

	// Eventful
	$APIEventful_ClientId='';
	$APIEventful_ClientSecret='';
	$APIEventful_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Eventful';
	$APIEventful_Template='';

	// XING
	$APIXING_ClientId='';
	$APIXING_ClientSecret='';
	$APIXING_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=XING';
	$APIXING_Template='';
	
	// VK
	$APIVK_ClientId='';
	$APIVK_ClientSecret='';
	$APIVK_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=VK';
	$APIVK_Template='';
	
	// Withings
	$APIWithings_ClientId='';
	$APIWithings_ClientSecret='';
	$APIWithings_RedirectUri='http://dev.practico.org/practico/index.php?PCO_WSOn=1&PCO_WSId=PCO_AutenticacionOauth&OAuthSrv=Withings';
	$APIWithings_Template='';