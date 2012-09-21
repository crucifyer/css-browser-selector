/*
CSS Browser Selector v0.4.3 (Sep 4, 2012)

-- original --
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
-- /original --

Fork project: http://code.google.com/p/css-browser-selector/
Song Hyo-Jin (shj at xenosi.de)
*/
function css_browser_selector(u) {
	var ua = u.toLowerCase(),
		is = function (t) {
			return ua.indexOf(t) > -1
		},
		g = 'gecko',
		w = 'webkit',
		s = 'safari',
		c = 'chrome',
		o = 'opera',
		m = 'mobile';
	return [
/* IE */
		(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua) && (v = RegExp.$1 * 1)) ?
			('ie ie' + v + ((v == 6 || v == 7) ?
				' ie67 ie678' : (v == 8) ?
					' ie678' : (v > 8) ? ' ie9m' : '')) :
/* FF */
		(/firefox\/(\d+)\.(\d+)/.test(ua) && (re = RegExp)) ? g + ' ff ff' + re.$1 + ' ff' + re.$1 + '_' + re.$2 :
			is('gecko/') ? g :
/* Opera */
		is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 :
			(/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) :
/* K */
		is('konqueror') ? 'konqueror' :
/* Black Berry */
		is('blackberry') ? m + ' blackberry' :
/* Android */
		is('android') ? m + ' android' :
/* Chrome */
		is(c) ? w + ' ' + c :
			is('crios') ? w + ' ' + c :
/* Iron */
		is('iron') ? w + ' iron' :
/* Safari */
		is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') :
/* Mozilla */
		is('mozilla/') ? g : '',
/* Machine */
		is('j2me') ? m + ' j2me' :
		is('iphone') ? m + ' iphone' :
		is('ipod') ? m + ' ipod' :
		is('ipad') ? m + ' ipad' :
		is('mac') ? 'mac' :
		is('darwin') ? 'mac' :
		is('webtv') ? 'webtv' :
		is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') :
		is('freebsd') ? 'freebsd' :
		(is('x11') || is('linux')) ? 'linux' : '',
/* Ratio (Retina) */
		(r = window.devicePixelRatio && r > 1) ? ' retina ratio' + r : '',
		'js'].join(' ');
};
document.documentElement.className += ' ' + css_browser_selector(navigator.userAgent);
function CSSSelectorUpdateOrientation() {
	switch(window.orientation) {
		case 90:
		case -90:
			$('html').removeClass('portrait').addClass('landscape');
			break;
		default:
			$('html').removeClass('landscape').addClass('portrait');
			break;
	}
}
if(!!jQuery) {
	(function($) {
		$(function() {
			if($('html').hasClass('mobile')) {
				$(document.body).bind('orientationchange', CSSSelectorUpdateOrientation);
				CSSSelectorUpdateOrientation();
			}
		});
	})(jQuery);
}

