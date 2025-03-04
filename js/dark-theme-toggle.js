/*
* Dark mode toggle
*
* In its current state, it will cause a minor FOIT.
* Basically, the background behind the panels will
* briefly flash white before turning dark. It's
* better than before, but not perfect.
*/

var darkStyles = document.getElementById('dark-theme-styles');
darkStyles.disabled = !darkStyles.disabled;

