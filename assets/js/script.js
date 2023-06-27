
// home page mobile onClick (login to search)

$("#go-to-search-mobile").on("click", function() {
    $("#login-mobile").addClass("d-none");
    $("#search-mobile").removeClass("d-none");
    $("#go-to-search-mobile").addClass("d-none");
    $("#register-button").addClass("mt-4");

});

//home to register anchor button

$("#register-button").on("click", function() {
    window.location = "register.html";
});



//register page country select 

$("#select-country").on("click", function () {
    $.ajax({
      url: "https://countriesnow.space/api/v0.1/countries/positions",
      dataType: "json",
      type: "get",
      success: function (response) {
        var i, pais, total;
  
        for (i = 0; i < response.data.length; i++) {
          pais = response.data[i];
          total = response.data.length;
  
          $("#select-country").append("<option>" + pais.name + "<option>");
        }
      },
    });
  });

  
  

