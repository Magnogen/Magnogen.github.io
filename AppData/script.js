var parsedUrl = new URL(window.location.href);
      if (parsedUrl.searchParams.get("dark") == "t") {
        document.getElementById("all").style.backgroundColor = "#222222";
        document.getElementById("all").style.color = "#eeeeee";
        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++) {
          links[i].style.color = "#eeeeee";
        } 
      } else {
        document.getElementById("all").style.backgroundColor = "#ffffff";
        document.getElementById("all").style.color = "#000000";
        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++) {
          links[i].style.color = "#000000";
        } 
      }
      function phizix() {
        document.getElementById("content").innerHTML = " \
        <style> \
          .header { \
            font-size: 18px; \
          } \
        </style> \
        <span class=\"header\">\
        Phizix \
        </span>";
      }
      function ytb() {
        document.getElementById("content").innerHTML = " \
        <style> \
          .header { \
            font-size: 18px; \
          } \
        </style> \
        <span class=\"header\">\
        YoutuBeats \
        </span>";
      }
      function emotions() {
        document.getElementById("content").innerHTML = " \
        <style> \
          .header { \
            font-size: 18px; \
          } \
        </style> \
        <span class=\"header\">\
        Emotions \
        </span>";
      }
