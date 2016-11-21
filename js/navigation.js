/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
(function () {
	var container, button, menu;

	container = document.getElementById('site-navigation-mobile');
	if (!container)
		return;

	button = document.getElementById('menu-toggle');
	if ('undefined' === typeof button)
		return;

	menu = container.getElementsByTagName('ul')[0];

	// Hide menu toggle button if menu is empty and return early.
	if ('undefined' === typeof menu) {
		button.style.display = 'none';
		return;
	}

	if (-1 === menu.className.indexOf('nav-menu'))
		menu.className += ' nav-menu';

	button.onclick = function () {
		if (-1 !== container.className.indexOf('toggled'))
			container.className = container.className.replace('toggled', 'main-navigation');
		else
			container.className = 'toggled';
	};
})();

(function timeAgo(selector) {

	var templates = {
		prefix : '',
		suffix : ' trước',
		seconds: 'Một phút',
		minute : 'Khoảng 1 phút',
		minutes: '%d phút',
		hour   : 'Khoảng 1 giờ',
		hours  : 'Khoảng %d giờ',
		day    : '1 ngày',
		days   : '%d ngày',
		month  : 'Khoảng 1 tháng',
		months : '%d tháng',
		year   : 'Khoảng 1 năm',
		years  : '%d năm'
	};
	var template = function (t, n) {
		return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
	};

	var timer = function (time) {
		if (!time)
			return;
		time = time.replace(/\.\d+/, ""); // remove milliseconds
		time = time.replace(/-/, "/").replace(/-/, "/");
		time = time.replace(/T/, " ").replace(/Z/, " UTC");
		time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
		time = new Date(time * 1000 || time);

		var now = new Date();
		var seconds = ((now.getTime() - time) * .001) >> 0;
		var minutes = seconds / 60;
		var hours = minutes / 60;
		var days = hours / 24;
		var years = days / 365;

		return templates.prefix + (
				seconds < 45 && template('seconds', seconds) ||
				seconds < 90 && template('minute', 1) ||
				minutes < 45 && template('minutes', minutes) ||
				minutes < 90 && template('hour', 1) ||
				hours < 24 && template('hours', hours) ||
				hours < 42 && template('day', 1) ||
				days < 30 && template('days', days) ||
				days < 45 && template('month', 1) ||
				days < 365 && template('months', days / 30) ||
				years < 1.5 && template('year', 1) ||
				template('years', years)
			) + templates.suffix;
	};

	var elements = document.getElementsByClassName('time_ago');
	for (var i in elements) {
		var $this = elements[i];
		if (typeof $this === 'object') {
			$this.innerHTML = timer($this.getAttribute('title') || $this.getAttribute('datetime'));
		}
	}
	// update time every minute
	setTimeout(timeAgo, 60000);

})();
