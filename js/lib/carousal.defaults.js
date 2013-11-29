// Just set the namespace for the plugin.
if(window.Carousal === undefined) {
	window.Carousal = {};
}
Carousal.settings = {
      "auto": true,             // Animate automatically, true or false
      "forward": true,			// forward transition is default.
      "fullScreenId": "",		// Full Screen buttonId
      "toggleCycleId": "",		// Rotation cycle toggle
      "pauseControls": true,    // Pause when hovering controls, true or false
      "prevText": "Previous",   // Text for the "previous" button
      "pauseText": "Pause",   	// Text for the "pause" button
      "nextText": "Next",       // Text for the "next" button
      "maxwidth": "",           // Max-width of the slideshow, in pixels
      "navContainer": "",       // Where auto generated controls should be appended to, default is after the <ul>
      "manualControls": "",     // Declare custom pager navigation
      "namespace": "carousal",  // String: change the default namespace used
      "speed": 500,             // Speed of the transition, in milliseconds
      "timeout": 4000,          // Time between slide transitions, in milliseconds
      "pager": false,           // Show pager, true or false
      "nav": false,             // Show navigation, true or false
      "pause": false,           // Pause on hover, true or false
      "before": $.noop,         // Before callback
      "after": $.noop           // After callback
   }