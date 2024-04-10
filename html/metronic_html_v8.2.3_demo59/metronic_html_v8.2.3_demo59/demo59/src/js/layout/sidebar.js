"use strict";

// Class definition
var KTAppSidebar = function () {
	// Private variables
	var wrapper;
	var sidebar;
	var collapsible;	

	var handleFollowingCollapse = function () {
		collapsible.addEventListener('shown.bs.collapse', event => {			 
			wrapper.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: 'smooth',
			});			  
		});
	}

	var handleMenuScroll = function() {
		var menuActiveItem = wrapper.querySelectorAll(".menu-link");

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
			collapsible = document.querySelector('#kt_app_sidebar_menu_following_collapse');

			wrapper = document.querySelector('#kt_app_sidebar_menu_wrapper');
			sidebar = document.querySelector('#kt_app_sidebar');

			if ( collapsible ) {
				handleFollowingCollapse();	
			}
			
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