'use strict';


function getPark(fetchUrl){
  fetch(fetchUrl)
    .then(response => response.json())
    .then(responseJson => {
      let data = responseJson.data;
      generateTemplate(data);
    });
}


function generateTemplate(data){
  const dataArr = [];
  data.forEach(element => {
    let dataObj= {
      Name: element.fullName,
      Description: element.description,
      URL: element.url
    };
    dataArr.push(dataObj);
    formatResults(dataArr);
    console.log(dataArr);
  });
}

function formatResults(dataArr){
  let html = '';
  for(let i = 0; i < dataArr.length; i++){
    let name = dataArr[i].Name;
    let description = dataArr[i].Description;
    let url = dataArr[i].URL;
    html = `<br>${name} <br> ${description} <br> <a href=${url}>${url}</a> <br> <br>`;
  }
  console.log(html);
  renderResults(html);
}

function renderResults(html){
  
  $('.search-results').append(html);

}

function generateServerRequest(state, limit){

  let fetchUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&limit=${limit}&api_key=hP5vtbLcAUtZzezetI0Zs09hlYDFwsAPfZdoaZok`;

  getPark(fetchUrl);
}

  
function userRequestState(){
  $('#search-parameters').submit(function(event){
    event.preventDefault();
    let state = $('#state').val();
    let limit = $('#number-of-results-input').val();
    generateServerRequest(state,limit);
  });
}

function mainfunction(){
  userRequestState();
}

$(mainfunction);