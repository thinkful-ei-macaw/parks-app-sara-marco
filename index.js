'use strict';

/*The user must be able to search for parks in one or more states.
The user must be able to set the max number of results, with a default of 10.

https://www.nps.gov/subjects/developer/api-documentation.htm#/parks/getPark

'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=INSERT-API-KEY-HERE'

key: hP5vtbLcAUtZzezetI0Zs09hlYDFwsAPfZdoaZok

https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=hP5vtbLcAUtZzezetI0Zs09hlYDFwsAPfZdoaZok




The search must trigger a call to NPS's API.


The parks in the given state must be displayed on the page. Include at least:
Full name
Description
Website URL
The user must be able to make multiple searches and see only the results for the current search.
As a stretch goal, try adding the park's address to the results. */
//curl -X GET "https://developer.nps.gov/api/v1/parks?stateCode=new%20york&stateCode=&limit=10&api_key=hP5vtbLcAUtZzezetI0Zs09hlYDFwsAPfZdoaZok" -H "accept: application/json"
//key = hP5vtbLcAUtZzezetI0Zs09hlYDFwsAPfZdoaZok

// https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=hP5vtbLcAUtZzezetI0Zs09hlYDFwsAPfZdoaZok     

function getPark(){
  fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=hP5vtbLcAUtZzezetI0Zs09hlYDFwsAPfZdoaZok')
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.data[0]);
      let data = responseJson.data[0];
      generateTemplate(data);
    });
}


function generateTemplate(data){
  
}

function render(){



}

  
function userRequest(){
  $('#state').submit(function(event){
    event.preventDefault();
    console.log('go west');
    getPark();
  });
}

function mainfunction(){

  userRequest();
  getPark();
}

$(mainfunction);