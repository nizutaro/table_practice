
    $(function () {
      $("table.sample td").hover(
        function () {
          var idx = $(this).index() + 1;
          
          var tds = $(this)
            .closest("table.sample")
            .find("td:nth-child(" + idx + ")");
            
          tds.css("background-color", "#fffbb7");
          $(this).css("background-color", "#fccd8f");
        },
        function () {
          var idx = $(this).index() + 1;
          var tds = $(this)
            .closest("table.sample")
            .find("td:nth-child(" + idx + ")");
          tds.css("background-color", "");
          $(this).css("background-color", "");
        }
      );
    });