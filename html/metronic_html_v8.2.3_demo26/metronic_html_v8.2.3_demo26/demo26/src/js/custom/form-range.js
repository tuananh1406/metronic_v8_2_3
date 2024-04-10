"use strict";

// Class definition
var KTAppFormRange = function () {
	// Private methods
	var initRange = function() {
		var progress = document.querySelector('.range-custom');		 
	 
		if (!progress) {
            return;
        }			 
	 
		progress.addEventListener('input', function() {
			var value = this.value;
			this.style.background = `linear-gradient(to right, #F1416C 0%, #F1416C ${value}%, #fff ${value}%, white 100%)`
		})		 
	}

	// Public methods
	return {
		init: function () {
			initRange();
		}
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTAppFormRange;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTAppFormRange.init();
});

 

 