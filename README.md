# CSS Browser Selector

> no need css hack. html tag adding your browser info
> fork this project from : http://rafael.adm.br/css_browser_selector/

### if IE6
```html
<html class="ie ie6 win js">
```
- ie6 ie67 ie678 ie6789

### if IE10
```html
<html class="ie ie10 ie9m win js">
```

### if EDGE
```html
<html class="chrome edge win js">
<html class="ie ie12 ie9m edge win js" oldedge>
```

### if iPhone Safari
```html
<html class="webkit safari mobile ios iphone js">
```

### if android retina tablet chrome
```html
<!-- android default internet browser -->
<html class="webkit chrome mobile chromedef android tablet retina ratio2 js">
<!-- google play chrome browser -->
<html class="webkit mobile chrome android tablet retina ratio2 js">
```

### using
```css
.myText { margin-bottom:2px; } 
.ie6 .myText { margin-bottom:1px; }
.opera .myText { margin-top:-1px; }
```

### php version using
```php
$className = css_browser_selector::getClassName($_SERVER['HTTP_USER_AGENT']);
```

### more support types
```css
.ie67, .ie678, .ie9m (IE9 and more)
.ff4 ~ .ff11 and more
```

### if jQuery && mobile support
```js
width > height ? landscape : portrait
```
```css
.portrait .landscape
.smartnarrow ( <= 360 )
.smartwide ( <= 640 )
.tabletnarrow ( <= 768 )
.tabletwide ( <= 1024 )
.pc ( > 1024 )
```

example
```css
#photo { float:left; }
.iphone.portrait #photo { clear:both; }
.smartwide #leftMenu, .tabletwide #leftMenu { float:left; width:120px; }
.tabletwide #rightMenu { float:right; width:120px; }
```

- support retina : view test page. http://crucifyer.github.io/css-browser-selector/

### mobile font zoom disable
```css
body {
	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	text-size-adjust: none;
}
```

### jquery 1.9 $.browser deprecated.
```js
// window.CSSBS_* defined.
if(window.CSSBS_ie) alert('MSIE');
if(window.CSSBS_ie6) alert('MSIE 6');

if MSIE define $.browser = {msie:1,version:msie version};
other browser $.browser = {};
```

compressed
- https://raw.githubusercontent.com/crucifyer/css-browser-selector/master/css_browser_selector.min.js

source
- https://raw.githubusercontent.com/crucifyer/css-browser-selector/master/css_browser_selector.js
- https://raw.githubusercontent.com/crucifyer/css-browser-selector/master/css_browser_selector.class.php

test page
- http://crucifyer.github.io/css-browser-selector/
