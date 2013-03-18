/*
CSS Browser Selector v0.4.5 (Jan 21, 2012)

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
		m = 'mobile',
		v = 0,
		r = window.devicePixelRatio ? (window.devicePixelRatio + '').replace('.', '_') : '1';
	var res = [
/* IE */
		(!(/opera|webtv/i.test(ua)) && /msie\s(\d+)/.test(ua) && (v = RegExp.$1 * 1)) ?
			('ie ie' + v + ((v == 6 || v == 7) ?
				' ie67 ie678 ie6789' : (v == 8) ?
					' ie678 ie6789' : (v == 9) ?
						' ie6789 ie9m' : (v > 9 ) ?
							' ie9m' : '')) :
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
		(r != '1') ? ' retina ratio' + r : '',
		'js portrait'].join(' ');
	if(window.jQuery && !window.jQuery.browser) {
		window.jQuery.browser = v ? {msie:1,version:v} : {};
	}
	return res;
};
(function(d, w) {
	var _c = css_browser_selector(navigator.userAgent);
	var h = d.documentElement;
	h.className += ' ' + _c;
	var _d = _c.replace(/^\s*|\s*$/g, '').split(/ +/);
	w.CSSBS = 1;
	for(var i = 0; i < _d.length; i ++) {
		w['CSSBS_' + _d[i]] = 1;
	}
	if(w.jQuery) {
		(function($) {
			$(w).load(function() {
				var p = 'portarit', l = 'landscape';
				var m = 'smart', mw = 'smartwide', t = 'tablet', tw = 'tabletwide';
				var $h = $(h);
				var to = 0, cw = 0;
				function CSSSelectorUpdateOrientation() {
					switch(w.orientation) {
						case 90:
						case -90:
							$h.removeClass(p).addClass(l);
							break;
						default:
							$h.removeClass(l).addClass(p);
							break;
					}
				}
				if($h.hasClass('mobile') && w.orientation != undefined) {
					$(w).on('orientationchange', CSSSelectorUpdateOrientation);
					CSSSelectorUpdateOrientation();
				}
				/* ie7 cpu 100% fix */
				function CSSSelectorUpdateSize() {
					try {
						var _cw = d.documentElement.clientWidth || d.body.clientWidth;
						if(_cw == cw) return;
						cw = _cw;
						clearTimeout(to);
					} catch(e) {}
					to = setTimeout(CSSSelectorUpdateSize_, 100);
				}
				function CSSSelectorUpdateSize_() {
					try {
						$h.removeClass(m).removeClass(mw).removeClass(t).removeClass(tw).removeClass('pc');
						$h.addClass(
							(cw <= 360) ? m :
							(cw <= 640) ? mw :
							(cw <= 768) ? t :
							(cw <= 1024) ? tw : 'pc'
						);
					} catch(e) {}
				}
				setTimeout(function() {
					$(w).on('resize', CSSSelectorUpdateSize);
					CSSSelectorUpdateSize();
				}, 500);
			});
		})(w.jQuery);
	}
})(document, window);


