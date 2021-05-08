// from data.js
var allData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!

allData.forEach(displaySightingData);

function displaySightingData(sightings)
  {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
}


  var dateinput = d3.select("#datetime");
  var newDate =""
 
  dateinput.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
    newDate= newText
  });

  var button = d3.select("#filter-btn");
 
  button.on("click", function() {
    /*console.log('Button clicked');
    if(newDate!=""){
      filteredData = (filterDataByDate(newDate, citi, state, country, shape ));
      removeTableBody();
      filteredData.forEach(displaySightingData);
    }*/
  });


    
  var cityinput =d3.select('#citi');
  var citi =''

  cityinput.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
    citi= newText
  });
 


  var stateinput = d3.select('#state');
  var state =''

  stateinput.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
    state= newText
  });
  

  var countryinput = d3.select('#country');
  var country =''

  countryinput.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
    country= newText
  });


  var shapeinput = d3.select('#shape');
  var shape =''

  shapeinput.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
    shape= newText
  });


  function filterDataByDate(date, city, state, country, shape)
  {
    return allData.filter(dt => dt.datetime == date && dt.city == city  && dt.state == state&& dt.country == country  && dt.shape == shape )
  }
  

  function removeTableBody(){
    d3.event.preventDefault();
    $tbody.html("");
  }