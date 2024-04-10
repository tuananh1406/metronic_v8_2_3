"use strict";

// Class definition
var KTAppSidebar = function () {
	// Private variables
	var wrapper;
	var sidebar;

	var handleMenuScroll = function() {
		var menuActiveItem = wrapper.querySelector(".menu-link.active");

		if ( !menuActiveItem ) {
			return;
		} 

		if ( KTUtil.isVisibleInContainer(menuActiveItem, wrapper) === true) {
			return;
		}

		wrapper.scroll({
			top: KTUtil.getRelativeTopPosition(menuActiveItem, wrapper),
			behavior: 'smooth'
		});
	}

	// Public methods
	return {
		init: function () {
			// Elements
			wrapper = document.querySelector('#kt_app_sidebar_wrapper');
			sidebar = document.querySelector('#kt_app_sidebar');
			
			if ( wrapper ) {
				handleMenuScroll();
			}
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTAppSidebar.init();
});