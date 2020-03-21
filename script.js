$(document).ready(function(){
     let city = [];

   
     $("#search").click(function(){
      let searchCity = $("#city").val();
      let searchState = $("#state").val(); 
      
      //city.push(searchCity)
      
      let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "," + searchState + "&appid=cda84838b266da1f64178d2c32302be0"
        console.log(queryURL);

      $.ajax({
          url: queryURL,
          method: "GET",
      }).then(function(response){
          $(".city").html("<h2>" +response.city.name + "</h2>")

          $(".time").html("<p>" + response.list[0].dt_txt.slice(0,10) + "</p>");
          
          let temp = (response.list[0].main.temp - 273.15) * 1.80 +32;
          $(".temp").text("Temperature: (F) " + temp.toFixed(2).slice(0,2));

          $(".humid").text("Humidity: " + response.list[0].main.humidity + "%");
          $(".speed").text("Wind speed: " + response.list[0].wind.speed);

          
      });
        function renderButtons(){
          $("#button-view").empty();

        for(let i = 0 ; i < searchCity.length ; i++){

            var a = $("<button>");

            a.addClass("city-button");

            a.attr("city", searchCity[i]);

            a.text(city[i]);

            $("#button-view").append(a);
         }
        }

        $("search").on("click",function(event){
          event.preventDefault();

          var city = $("#city").val().trim();

         city.push(searchCity);

          renderButtons();
        })

       


      let fiveDaysUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "," + searchState + "&appid=cda84838b266da1f64178d2c32302be0"
        
      $.ajax({
          url: fiveDaysUrl,
          method: "GET",
      }).then(function(response2){
          console.log(response2)
          $(".first").append("<p>" + response2.list[0].dt_txt.slice(0,10) + "</p> <br>");




          
         // $(".first").append("<img src='http://openweathermap.org/img/wn/'>" +response2.list[0].weather.icon + ".png")

         $(".first").append(`<img src="http://openweatherap.org/img/wn/${response2.list[0].weather.icon}.png>`) 




          let temp1 = (response2.list[0].main.temp - 273.15) * 1.80 +32;
          $(".first").append("Temperature: (F) " + temp1.toFixed(2).slice(0,2)+ "<br>");
          $(".first").append("Humidity: " + response2.list[0].main.humidity + "%" + "<br>");
         
          
         
          $(".second").append("<p>" + response2.list[8].dt_txt.slice(0,10) + "</p> <br>");
          let temp2 = (response2.list[8].main.temp - 273.15) * 1.80 +32;
          $(".second").append("Temperature: (F) " + temp2.toFixed(2).slice(0,2)+ "<br>");
          $(".second").append("Humidity: " + response2.list[8].main.humidity + "%" + "<br>");
         
          
          
          $(".third").append("<p>" + response2.list[10].dt_txt.slice(0,10) + "</p> <br>");
          let temp3 = (response2.list[10].main.temp - 273.15) * 1.80 +32;
          $(".third").append("Temperature: (F) " + temp3.toFixed(2).slice(0,2)+ "<br>");
          $(".third").append("Humidity: " + response2.list[10].main.humidity + "%" + "<br>");
         
         
         
          $(".fourth").append("<p>" + response2.list[18].dt_txt.slice(0,10) + "</p> <br>");
          let temp4 = (response2.list[18].main.temp - 273.15) * 1.80 +32;
          $(".fourth").append("Temperature: (F) " + temp4.toFixed(2).slice(0,2)+ "<br>");
          $(".fourth").append("Humidity: " + response2.list[18].main.humidity + "%" + "<br>");
          
          
          
          $(".fifth").append("<p>" + response2.list[28].dt_txt.slice(0,10) + "</p> <br>");
          let temp5 = (response2.list[28].main.temp - 273.15) * 1.80 +32;
          $(".fifth").append("Temperature: (F) " + temp5.toFixed(2).slice(0,2)+ "<br>");
          $(".fifth").append("Humidity: " + response2.list[28].main.humidity + "%" + "<br>");
         
         });


         


   });
//    function showCities(){
        
   
// };
// showCities();

});
//cda84838b266da1f64178d2c32302be0