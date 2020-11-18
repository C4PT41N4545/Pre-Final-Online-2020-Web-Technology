var container = document.getElementById("container");
let requestURL = 'data.json'; 
let request = new XMLHttpRequest(); 
request.onreadystatechange = function () { 
    if (request.readyState == 4 && request.status == 200) {             
        dataReportStatus(JSON.parse(request.responseText));            
    } }; 
request.open("GET", requestURL, true); 
request.send(); 
//data.tracks.items[i].album.artists[0].name
function dataReportStatus(data) {
    for (let i = 0; i < data.tracks.items.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class","item");

        var img = document.createElement("img");
        img.setAttribute("src", data.tracks.items[i].album.images[0].url);
        img.setAttribute("class","image");
        item.appendChild(img);

        var name = document.createElement("p");
        name.innerHTML = "<b>" + data.tracks.items[i].album.name + "<b>";
        item.appendChild(name);

        var artist = document.createElement("p");
        artist.innerHTML = "Artist: "+ data.tracks.items[i].album.artists[0].name;
        item.appendChild(artist);
        
        var date = document.createElement("p");
        date.innerHTML = "Release date: " + data.tracks.items[i].album.release_date;
        item.appendChild(date);

        var avaliable = document.createElement("p");
        avaliable.innerHTML = "Avaliable: " + data.tracks.items[i].album.available_markets.length + " countries";
        item.appendChild(avaliable);

        document.getElementById("container").appendChild(item);
    }
}
