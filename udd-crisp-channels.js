/**
 * @file Permite integrar el chat de Crisp según administración de "canales" definidos en udd.cl
 * @version 0.1.0
 * @license
 * ISC License
 * Copyright (c) 2021, Bloom User Experience SpA.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
'use strict';
;(function(window, document){
	// Inicializar el cliente de Crisp
	window.$crisp = [];
	window.CRISP_WEBSITE_ID = "76dc2385-f55e-4825-bf8b-0c43f1d23854";
	var script = document.createElement('script');
	script.src = "https://client.crisp.chat/l.js";
	script.async = 1;
	document.getElementsByTagName("head")[0].appendChild(script);
	// Por defecto el chat debe partir escondido
	$crisp.push(['do', 'chat:hide']);
	window.addEventListener(
		'DOMContentLoaded',
		function(){
			// Consultar a API UDD si el chat está habilitado en esta URL actualmente
			window.fetch(
				'https://www.udd.cl/wp-json/udd-crisp/v1/is-available?url=' + encodeURIComponent( document.location.href ),
			).then(function(response){
				// Texto de la respuesta
				return response.text();
			}).then(function(data){
				// La API puede responder true/false o un string vacío
				var isAvailable = data ? JSON.parse(data) : false;
			 	if (isAvailable) {
			 		$crisp.push([
			 			'set',
			 			'session:data',
			 			[ [ [ 'user-href', location.href ] ] ]
			 		]);
			 		$crisp.push([
			 			'set',
			 			'session:segments',
			 			[ [ document.location.hostname ], true ]
			 		]);
			 		$crisp.push(['do', 'chat:show']);
			 	} else {
			 		$crisp.push(['do', 'chat:hide']);
			 	}
			});
		}
	);
})(window, document);
