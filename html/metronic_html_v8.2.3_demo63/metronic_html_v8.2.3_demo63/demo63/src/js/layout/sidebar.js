"use strict";

// Class definition
var KTAppSidebar = function () {
	// Private variables
	var menuWrapper;

	var handleMenuScroll = function() {
		var menuActiveItem = menuWrapper.querySelector(".menu-link.active");

		if ( !menuActiveItem ) {
			return;
		} 

		if ( KTUtil.isVisibleInContainer(menuActiveItem, menuWrapper) === true) {
			return;
		}

		menuWrapper.scroll({
			top: KTUtil.getRelativeTopPosition(menuActiveItem, menuWrapper),
			behavior: 'smooth'
		});
	}

	var handleThemeMode = function() {
		document.querySelector('#kt_sidebar_theme_mode_toggle').addEventListener('change', () => {
			if (KTThemeMode.getMode() === 'light') {
				KTThemeMode.setMode('dark');
			} else {
				KTThemeMode.setMode('light');
			}			
		});
	}

	// Public methods
	return {
		init: function () {
			handleThemeMode();

			// Elements
			menuWrapper = document.querySelector('#kt_app_sidebar_menu_wrapper');
			
			if ( menuWrapper === null) {
				return;
			}

			if ( menuWrapper ) {
				handleMenuScroll();
			}
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTAppSidebar.init();
});