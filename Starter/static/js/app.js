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
    console.log('Button clicked');
    console.log(newDate)
    if(newDate!=""){
      filteredData = (filterDataByDate(newDate));
      removeTableBody();
      filteredData.forEach(displaySightingData);
    }
  });

  function filterDataByDate(date)
  {
    return allData.filter(dt => dt.datetime == date)
  }
  
  function removeTableBody(){
    tbody.set().empty()
}