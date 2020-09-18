document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    // loading stufff
    console.log(`hey I am getting ready!!`);
    // dom elements

    // var quote = document.getElementById("loading");
    // var node = document.createElement("H1");
    // var text = document.createTextNode("Loading... ");

    // node.appendChild(text);
    // quote.appendChild(node);

    $(".loading").append("<h1>" + "Loading... " + "</h1>");
  } else if (event.target.readyState === "complete") {
    // quotes
    url =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

    // fadeout Loading
    $(".loading").fadeOut("slow");

    // jQuery lib to handle the url get response

    $.getJSON(url).then(function (data) {
      //   console.log("Am i getting", data);
      $(".quotes").append(
        "<h1>" + `${data.quoteText}` + " -<i>" + data.quoteAuthor + "</i></h1>"
      );
    });

    //   balls will get the cat eye balls both left and right
    var balls = document.getElementsByClassName("balls");

    // mouseomove function
    document.addEventListener("mousemove", function (event) {
      // x axis with respect to width in %
      var x = (event.clientX * 100) / window.innerWidth + "%";
      // y axis with respect to height in %
      var y = (event.clientY * 100) / window.innerHeight + "%";

      //   console.log(`X is ${x} and Y is ${y}`);

      // we have 2 eye balls
      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;

        balls[i].style.transform = "translate(" + x + "," + y + ")";

        // if x left is near to 0 angle fix the eye to that specific angle
        if (x <= "30%") {
          balls[i].style.transform = "rotateZ(60deg)";
        } else if (y <= "25%") {
          balls[i].style.transform = "rotateZ(-35deg)";
        }
      }
    });
  }
});
