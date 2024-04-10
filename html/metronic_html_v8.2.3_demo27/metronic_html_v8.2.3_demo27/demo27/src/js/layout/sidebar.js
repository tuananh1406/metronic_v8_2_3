"use strict";

// Class definition
var KTAppSidebar = function () {
	// Private variables
	var secondaryMenu;
	var secondaryMenuWrapper;

	var handleSecondaryMenuScroll = function() {
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

	// Public methods
	return {
		init: function () {
			// Elements
			secondaryMenu = document.querySelector('#kt_app_header_menu');
			secondaryMenuWrapper = document.querySelector('#kt_app_sidebar_menu_wrapper');
			
			if ( secondaryMenu === null || secondaryMenuWrapper === null) {
				return;
			}

			if ( secondaryMenuWrapper ) {
				handleSecondaryMenuScroll();
			}
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTAppSidebar.init();
});