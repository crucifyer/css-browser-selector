<?php
/*
CSS Browser Selector php v0.0.3 (June 2, 2013)
conversion from js
project: https://github.com/crucifyer/css-browser-selector/
License: http://choosealicense.com/licenses/mit/
Song Hyo-Jin (shj at xenosi.de)

$className = css_browser_selector::getClassName($_SERVER['HTTP_USER_AGENT']);

*/

class css_browser_selector
{
	private static $ua = null, $re = null;
	const g = 'gecko',
		w = 'webkit',
		s = 'safari',
		c = 'chrome',
		o = 'opera',
		m = 'mobile';

	private function __construct() {
	}

	private static function is($type) {
		return strpos(self::$ua, $type) !== false ? true : false;
	}

	private static function test($regex) {
		return preg_match($regex, self::$ua, self::$re) != false ? true : false;
	}

	public static function getClassName($userAgent, $nomachine = false) {
		self::$ua = strtolower($userAgent);

		return preg_replace('/ +/', ' ', implode(' ', array(
			/* IE */
			(! self::test('~opera|webtv~') && self::test('~msie\s(\d+)~')) ?
				'ie ie' . self::$re[1] . ((self::$re[1] == 6 || self::$re[1] == 7) ?
					' ie67 ie678 ie6789' : ((self::$re[1] == 8) ?
						' ie678 ie6789' : ((self::$re[1] == 9) ?
							' ie6789 ie9m' : ((self::$re[1] > 9) ?
								' ie9m' : '')))) :
				/* EDGE */
				(self::test('~edge/(\d+)\.(\d+)~') ?
					(self::is('chrome/') ? 'chrome edge' : 'ie ie' . self::$re[1] . ' ie' . self::$re[1] . '_' . self::$re[2] . ' ie9m edge') :
					/* IE 11 */
					(self::test('~trident/\d+.*?;\s*rv:(\d+)\.(\d+)\)~') ?
						'ie ie' . self::$re[1] . ' ie' . self::$re[1] . '_' . self::$re[2] . ' ie9m' :
						/* FF */
						(self::test('~firefox/(\d+)\.(\d+)~') ? self::g . ' ff ff' . self::$re[1] . ' ff' . self::$re[1] . '_' . self::$re[2] :
							(self::is('gecko/') ? self::g :
								/* Opera */
								(self::is(self::o) ? self::o . (self::test('~version/(\d+)~') ? ' ' . self::o . self::$re[1] :
										(self::test('~opera(\s|/)(\d+)~') ? ' ' . self::o . self::$re[2] : '')) :
									/* K */
									(self::is('konqueror') ? 'konqueror' :
										/* Black Berry */
										(self::is('blackberry') ? self::m . ' blackberry' :
											/* Chrome */
											((self::is(self::c) || self::is('crios')) ? self::w . ' ' . self::c :
												/* Iron */
												(self::is('iron') ? self::w . ' iron' :
													/* Safari */
													(! self::is('cpu os') && self::is('applewebkit/') ? self::w . ' ' . self::s :
														/* Mozilla */
														(self::is('mozilla') ? self::g : ''))))))))))),
			/* Android */
			(self::is('android') ? self::m . ' android' : ''),
			/* Tablet */
			(self::is('tablet') ? 'tablet' : ''),
			/* Machine */
			($nomachine ? '' : (self::is('j2me') ? self::m . ' j2me' :
				(self::is('ipad; u; cpu os') ? self::m . ' chrome android tablet' :
					(self::is('ipad;u;cpu os') ? self::m . ' chromedef android tablet' :
						(self::is('iphone') ? self::m . ' ios iphone' :
							(self::is('ipod') ? self::m . ' ios ipod' :
								(self::is('ipad') ? self::m . ' ios ipad' :
									(self::is('mac') ? 'mac' :
										(self::is('darwin') ? 'mac' :
											(self::is('webtv') ? 'webtv' :
												(self::is('win') ? 'win' . (self::is('windows nt 6.0') ? ' vista' : '') :
													(self::is('freebsd') ? 'freebsd' :
														((self::is('x11') || self::is('linux')) ? 'linux' : '')))))))))))))
		)));
	}
}

