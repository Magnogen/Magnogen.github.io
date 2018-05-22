var parsedUrl = new URL(window.location.href);
if (parsedUrl.searchParams.get("dark") == "t") {
  document.getElementById("all").style.backgroundColor = "#222222";
  document.getElementById("all").style.color = "#eeeeee";
} else {
	document.getElementById("all").style.backgroundColor = "#ffffff";
  document.getElementById("all").style.color = "#000000";
}
