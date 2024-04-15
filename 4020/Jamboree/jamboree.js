let juke = document.querySelector('#juke');
let promptExists = 0;

let songs = [];
function Song(image, link, title) {
    this.image = image;
    this.link = link;
    this.title = title;
}

songs.push(new Song("images/classicMan.jpg", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9f/c8/7e/9fc87e19-4914-42eb-d04c-8289b97b5766/mzaf_18319173082640550731.plus.aac.p.m4a", "Classic Man"));
songs.push(new Song("images/howManyDrinks.jpg", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0b/19/c9/0b19c924-280e-0887-38ed-2548079dd680/mzaf_131231906764323009.plus.aac.p.m4a", "How Many Drinks?"));
songs.push(new Song("images/memoriesBackThen.jpg", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0b/19/c9/0b19c924-280e-0887-38ed-2548079dd680/mzaf_131231906764323009.plus.aac.p.m4a","Memories Back Then"));
songs.push(new Song("images/fragile.jpg", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/00/08/7e/00087ece-61f7-b497-63bf-2c37ce067532/mzaf_2040451736789768687.plus.aac.p.m4a","Fragile"));
songs.push(new Song("images/itsOnAgain.png", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fe/69/17/fe691791-1f2e-8d1f-a843-e6d880867161/mzaf_17545270542259655185.plus.aac.p.m4a","It's On Again"));
songs.push(new Song("images/theGreatest.jpg", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/e2/57/2a/e2572ab9-1c46-878a-2275-e9bb6684c999/mzaf_17272480143812613641.plus.aac.p.m4a","The Greatest"));
songs.push(new Song("images/monaLisa.jpg", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/76/f2/c1/76f2c11e-9ee6-5a9e-53f7-23b862f46689/mzaf_17956863531412297858.plus.aac.p.m4a","Mona Lisa"));
songs.push(new Song("images/payForIt.jpg", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a3/a1/7e/a3a17ea0-eabc-8546-80da-e6186657fb61/mzaf_6353017350573429001.plus.aac.p.m4a","Pay for It"));
songs.push(new Song("images/maskOff.jpg", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/7b/19/9e/7b199ec1-013c-9927-270e-1441e21f74d4/mzaf_15925404258334684155.plus.aac.p.m4a","Mask Off"));
songs.push(new Song("images/dedication.jpg", " https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/a7/19/3c/a7193c2c-d123-7916-2dbe-8ebae6c28e52/mzaf_332501722175589617.plus.aac.p.m4a","Dedication"));

function populate(){
    console.log("Populate called");
    let currentImage = "";
    let currentLink = "";
    let currentTitle = "";

    for (var i = 0; i < songs.length; i++) {
        currentImage = "<img src='" + songs[i].image + "'>";
        currentLink = "<audio controls src="+ songs[i].link + " type='audio/m4a'></audio>";
        currentTitle = "<h2>" + songs[i].title + "</h2>";

        juke.innerHTML+= "<div class='card'>" + currentTitle + currentImage + currentLink + "</div>";
    }
    addPlus();
}
populate();

function addPlus() {
    juke.innerHTML += "<button id='plus' onclick='prompt()'><img src='images/plus.png'></button>";
}
function subPlus() {
    document.querySelector('#plus').style.display = "none";
}


function searchAPI() {
    console.log("SEARCH PRESSED");
    let box = document.querySelector('#promptBox');
    let searchResults = document.querySelector("#results");
    searchResults.innerHTML = "";

    let txt = document.querySelector('#promptText').value;
    console.log("txt = " + txt);

    let url = 'https://itunes.apple.com/search?term=' + txt + '&media=music&limit=10';
    console.log("baseURL = " + url);


    $.getJSON(url, function(data) {
        let Cname = "";
        let Cartist = "";
        let Cimg = "";
        let Clink ="";
        for (var j = 0; j < data.resultCount; j++) {

            Cname = data.results[j].trackName;
            Cartist = data.results[j].artistName;
            Cimg = data.results[j].artworkUrl100;
            Clink = data.results[j].previewUrl;

            searchResults.innerHTML+="<div class='addOption'><img src=" + Cimg +"> <div class='optionInfo'><h4>" + Cname + "</h4> <p>-By " + Cartist + "<p></div></div>";
        }
        document.querySelector("#confirm").onclick = () => { 
            add(); 
        };

    });
}

function add() {
    let juke = document.querySelector('#juke');
    juke.innerHTML= "";
    let songs = [];
    let box = document.querySelector('#promptBox');
    let searchResults = document.querySelector("#results");
    searchResults.innerHTML = "";

    let txt = document.querySelector('#promptText').value;
    console.log("txt ADD = " + txt);

    let url = 'https://itunes.apple.com/search?term=' + txt + '&media=music&limit=10';
    console.log("baseURL = " + url);
    $.getJSON(url).then(function(data) { 
        let Cname = "";
        let Cartist = "";
        let Cimg = "";
        let Clink ="";
        for (var j = 0; j < data.resultCount; j++) {        
            Cname = data.results[j].trackName;
            Cartist = data.results[j].artistName;
            Cimg = data.results[j].artworkUrl100;
            Clink = data.results[j].previewUrl;
            songs.push(new Song(Cimg, Clink, Cname));
            console.log("Track "+ j +": " + Cname);
            console.log("Artist: " + Cartist);
            console.log("\n");
        }

        document.querySelector('#juke').classList.remove("filter");
        document.querySelector("#promptBox").style.display = "none";
        console.log(songs);
        let currentImage = "";
        let currentLink = "";
        let currentTitle = "";
        for (var i = 0; i < songs.length; i++) {
            currentImage = "<img src='" + songs[i].image + "'>";
            currentLink = "<audio controls src="+ songs[i].link + " type='audio/m4a'></audio>";
            currentTitle = "<h2>" + songs[i].title + "</h2>";

            juke.innerHTML+= "<div class='card'>" + currentTitle + currentImage + currentLink + "</div>";
        }
        juke.innerHTML += "<button id='plus' onclick='prompt()'><img src='images/plus.png'></button>";
    });

}

function prompt() {
    juke.classList.add("filter");
    if (promptExists) {
        document.querySelector('#promptBox').style.display = "block";
        document.querySelector('#results').innerHTML = "";
    } else {
        document.querySelector('main').innerHTML+="<div id='promptBox'><input id='promptText' type='text' placeholder='Search a Song'></input><button onclick='searchAPI()' id='request'>Search</button><button id='confirm'>Confirm</button><hr><div id='results'></div></div>";
        promptExists = 1;
    }
}

function subPlus() {
    document.querySelector('#plus').style.display = "none";
}