var container = document.getElementById("container");
let requestURL = 'data.json'; 
let request = new XMLHttpRequest(); 
request.onreadystatechange = function () { 
    if (request.readyState == 4 && request.status == 200) {             
        dataReportStatus(JSON.parse(request.responseText));            
    } }; 
request.open("GET", requestURL, true); 
request.send(); 
function dataReportStatus(data) { 
    alert(data.tracks.href);
}
