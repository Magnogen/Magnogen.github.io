var parsedUrl = new URL(window.location.href);
document.getElementById('content').innerHTML = parsedUrl.searchParams.get("content");
if (parsedUrl.searchParams.get("action") == "search") {
  document.getElementById('content').innerHTML = " \
    <style> \
      #myInput { \
            width: 100%; \
            font-size: 16px; \
            padding: 12px 20px 12px 40px; \
            border: 1px solid #ddd; \
            margin-bottom: 12px; \
        } \
        #myUL { \
            list-style-type: none; \
            padding: 0; \
            margin: 0; \
        } \
        #myUL li a { \
            border: 1px solid #ddd; \
            margin-top: -1px; \
            background-color: \#444444; \
            padding: 12px; \
            text-decoration: none; \
            font-size: 18px; \
            color: #ffffff; \
            display: block; \
        } \
        #myUL li a:hover:not(.header) { \
            background-color: \#666666; \
        } \
    </style> \
    <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for inputs...\"> \
    <ul id=\"myUL\"> \
      <li><a onclick=\"askAction()\">action</a></li> \
      <li><a onclick=\"askContent()\">content</a></li> \
    </ul> \
    ";
} else if (parsedUrl.searchParams.get("action") == "getCookieValue") {
  document.getElementById('content').innerHTML = document.cookie;
  document.getElementById('cookieTrue').innerHTML = "The page does contain cookies now.";
}
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function askAction() {
    var action = prompt("Enter action:", "Example");
        if (content != null) {
            window.location.href = "https://magnogen.github.io/javaScriptTesting/?action="+action;
        }
}
function askContent() {
    var content = prompt("Enter content:", "Example");
        if (content != null) {
            window.location.href = "https://magnogen.github.io/javaScriptTesting/?content="+content;
        }
}
