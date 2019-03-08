setTimeout(function() {
  document.querySelector(".bottle").style.transform =
    "translate(-300px, -700px) rotate(30deg)";
  document.querySelector(".bottle").style.transition =
    "transform 1500ms ease-in-out";
  document.querySelector(".wheat").style.transform =
    "translate(-400px, -1100px) rotate(30deg)";
  document.querySelector(".wheat").style.transition =
    "transform 1500ms ease-in-out";
  document.querySelector(
    ".circle"
  ).style.background = `radial-gradient( circle, rgba(54, 13, 41, 1) 0%,rgba(54, 13, 41, 1) 100%)`;
  document.querySelector(".circle").style.transition =
    "background 1500ms lineral";
  // ----------------------------------------------------
  setTimeout(function() {
    document.querySelector(".bottle2").style.transform =
      "translate(-1100px, -440px) rotate(60deg)";
    document.querySelector(".bottle2").style.transition =
      "transform 1500ms ease-in-out";
    document.querySelector(".strb").style.transform =
      "translate(-500px, -500px)";
    document.querySelector(".strb").style.transition =
      "transform 1500ms ease-in-out";
    // ----------------------------------------------------
    setTimeout(function() {
      document.querySelector(".bottle2").style.transform =
        "translate(-1400px, -1200px) rotate(90deg)";
      document.querySelector(".bottle2").style.transition =
        "transform 1500ms ease-in-out";
      document.querySelector(".strb").style.transform =
        "translate(-800px, -1500px) rotate(60deg)";
      document.querySelector(".strb").style.transition =
        "transform 1500ms ease-in-out";
      // ==================================================
      setTimeout(function() {
        document.querySelector(".bottle3").style.transform =
          "translate(-1100px, -440px) rotate(60deg)";
        document.querySelector(".bottle3").style.transition =
          "transform 1500ms ease-in-out";
        document.querySelector(".herbal").style.transform =
          "translate(-500px, -400px)";
        document.querySelector(".herbal").style.transition =
          "transform 1500ms ease-in-out";
        document.querySelector(
          ".circle"
        ).style.background = `radial-gradient(circle, rgba(0,61,50,1) 0%, rgba(0,24,22,1) 100%)`;
        document.querySelector(".circle").style.transition =
          "background 1500ms lineral";
        // =============================================
        setTimeout(function() {
          document.querySelector(".bottle3").style.transform =
            "translate(-1400px, -1200px) rotate(90deg)";
          document.querySelector(".bottle3").style.transition =
            "transform 1500ms ease-in-out";
          document.querySelector(".herbal").style.transform =
            "translate(-800px, -1500px) rotate(60deg)";
          document.querySelector(".herbal").style.transition =
            "transform 1500ms ease-in-out";
          document.querySelector(
            ".circle"
          ).style.background = `radial-gradient(circle, rgba(50,60,21,1) 0%, rgba(16,20,10,1) 100%)`;
          document.querySelector(".circle").style.transition =
            "background 1500ms lineral";
          setTimeout(function() {
            document.querySelector(".bottle4").style.transform =
              "translate(-1100px, -440px) rotate(60deg)";
            document.querySelector(".bottle4").style.transition =
              "transform 1500ms ease-in-out";
            document.querySelector(".lime").style.transform =
              "translate(-450px, -300px)";
            document.querySelector(".lime").style.transition =
              "transform 1500ms ease-in-out";
          }, 500);
        }, 2000);
      }, 500);
    }, 2000);
  }, 500);
}, 10000);
