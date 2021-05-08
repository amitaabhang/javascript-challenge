// from data.js
var allData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

var dateinput = d3.select("#datetime");
 
var button = d3.select("#filter-btn");

//Display all the data on load
allData.forEach(displaySightingData);

//Function to create table based on data that is passed
function displaySightingData(sightings)
  {

    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => 
    {
      var cell = row.append("td");
      cell.text(value);
    });
}


  //Handle button click event
  button.on("click", function() {

  d3.event.preventDefault();   
  console.log('Button clicked');

  var newDate = dateinput.property("value").trim();

  tbody.html("");

  filteredData = (filterDataByDate(newDate));
  
  filteredData.forEach(displaySightingData);
 
  });
  
  //Function to filter data by date
  function filterDataByDate(date)
  {
    return allData.filter(dt => dt.datetime == date)
  }
  
