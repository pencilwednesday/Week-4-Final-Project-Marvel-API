// Here's your personal Marvel Comics API information:

// Your public key
// b5025002fed92c379235ccd6df1878c1
// Your private key
// c594216bf76f5a1792d5e0ad5842d46d743b8832

// 1c594216bf76f5a1792d5e0ad5842d46d743b8832b5025002fed92c379235ccd6df1878c1

// md5 hash: 953185301aba7d4acdbf2a7ce85e009f

// http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b5025002fed92c379235ccd6df1878c1&hash=953185301aba7d4acdbf2a7ce85e009f

var marvel = {
  render: function () {
    var url =
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b5025002fed92c379235ccd6df1878c1&hash=953185301aba7d4acdbf2a7ce85e009f";
    var message = document.getElementById("message");
    var footer = document.getElementById("footer");
    var marvelContainer = document.getElementById("marvel__container");

    $.ajax({
      url: url,
      type: "GET",
      beforeSend: function () {
        message.innerHTML = "Loading...";
      },
      complete: function () {
        message.innerHTML = "Sucessfully loaded!";
      },
      success: function (data) {
        footer.innerHTML = data.attributionHTML;
        var string = "";
        string += "<div class='row'>";

        for (var i = 0; i < data.data.results.length; i++) {
          var element = data.data.results[i];

          string += "<div class='col-md-3'>";
          string += "  <img src ='" + element.thumbnail.path + " /portraint_fantastic." + element.thumbnail.extension + "' />";
          // console.log("https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_small.jpg")
          string += " <a href='" + element.urls[0].url + "' target='_blank'>";
          string += " <h4>" + element.name + "</h4>"; 
          string += " </a>";
          string += "</div>";

          if ((i + 1) % 4 == 0) {
            string += "</div>";
            string += "<div class='row'>";
          }
        }

        marvelContainer.innerHTML = string;
      },
      error: function () {
        message.innerHTML = "We are sorry! Please Reloead page.";
      },
    });
  },
};
marvel.render();