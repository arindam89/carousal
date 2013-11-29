// Detect transition support
// This helper does not require jQuery.
// Returns boolean if it supports transition.
Carousal.isTransitionEnabled = (function () {
  var docBody = document.body || document.documentElement;
  var styles = docBody.style;
  var prop = "transition";
  if (typeof styles[prop] === "string") {
    return true;
  }
  // Tests for vendor specific prop
  vendor = ["Moz", "Webkit", "Khtml", "O", "ms"];
  prop = prop.charAt(0).toUpperCase() + prop.substr(1);
  var i;
  for (i = 0; i < vendor.length; i++) {
    if (typeof styles[vendor[i] + prop] === "string") {
      return true;
    }
  }
  return false;
})()