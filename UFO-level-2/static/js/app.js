// from data.js
var allData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var dateinput = d3.select("#datetime");
var cityinput =d3.select('#citi');
var stateinput = d3.select('#state');
var countryinput = d3.select('#country');
var shapeinput = d3.select('#shape');

allData.forEach(displaySightingData);

function displaySightingData(sightings)
  {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
}

 
  button.on("click", function() {
    d3.event.preventDefault(); 
    console.log('Button clicked');

    var filterDate = dateinput.property("value").trim();
    var filterCity = cityinput.property("value").trim();
    var filterState = stateinput.property("value").trim();
    var filterCountry = countryinput.property("value").trim();
    var filterShape = shapeinput.property("value").trim();

    tbody.html("");

    filteredByDateData = (filterDataByDate(filterDate));
    filteredByCityData = (filterDataByCity(filterCity));
    filteredByStateData = (filterDataByState(filterState));
    filteredByCountryData = (filterDataByCountry(filterCountry));
    filteredByShapeData = (filterDataByShape(filterShape));

    //console.log(`Filtered Data ${filteredData}`)
    //filteredData.forEach(showData);

    filteredByDateData.forEach(displaySightingData);
    filteredByCityData.forEach(displaySightingData);
    filteredByStateData.forEach(displaySightingData);
    filteredByCountryData.forEach(displaySightingData);
    filteredByShapeData.forEach(displaySightingData);
        
  });


  function filterDataByDate(date)
  {
    return allData.filter(dt => dt.datetime == date)
  }

  function filterDataByCity(city)
  {
    return allData.filter(dt => dt.city == city)
  }

  function filterDataByState(state)
  {
    return allData.filter(dt => dt.state == state)
  }

  function filterDataByCountry(country)
  {
    return allData.filter(dt => dt.country == country)
  }

  function filterDataByShape(shape)
  {
    return allData.filter(dt => dt.shape == shape)
  }


  function showData(data)
  {
    Object.entries(data).forEach(([key, value]) => {
      console.log(`key ${key} Value ${value}`)
    });
  }
