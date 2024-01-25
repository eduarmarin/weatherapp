
const apiKey = '80aef1347f084e6caba654d19e54c9be';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

//----------------------------------------------------navbar------------------

//import odin from './odin.png';
const odinlogo = new Image();
odinlogo.src = './odin.png';
odinlogo.style.width = "100px";
odinlogo.style.cursor = "pointer";
//odinlogo.addEventListener('click', menunavbar); // this one go to every menu page/link

var navbar = document.createElement('nav'); // this one create the navbar
navbar.style.width = "100%";                // and styles it 
navbar.style.height = "100px";
navbar.style.background = "gray";
navbar.style.color = "black";
navbar.style.display = "flex";
navbar.style.flexDirection = "row";
navbar.style.alignItems = "center";
navbar.style.justifyContent = "space-between";
navbar.style.position = "absolute";    
navbar.style.top = "0";
navbar.style.marginLeft = "-8px";

var div1 = document.createElement('div'); //this one contain logo a name on the left side of navbar
div1.style.display = "flex";              // and styles it 
div1.style.flexDirection = "row";
div1.style.alignItems = "center";
div1.style.justifyContent = "center";
//div1.style.backgroundColor = "blue";

navbar.appendChild(div1); //add first div to navbar 

var divlogo = document.createElement('div'); // for logo
divlogo.appendChild(odinlogo);
div1.appendChild(divlogo);

var link = document.createElement('link'); //this one allow to add google font family, after the equal and using 
link.setAttribute('rel', 'stylesheet');    // the symbol '|' to separate them
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Tangerine|Courgette|Lato|Playfair+Display');
document.head.appendChild(link);

var divname = document.createElement('div'); // for name
divname.innerHTML = "Odin Weather";
divname.style.fontFamily = 'Courgette, serif';
divname.style.fontSize = "3rem";
divname.style.cursor = "pointer";

div1.appendChild(divname);
if (window.matchMedia("(max-width: 600px)").matches) {
    console.log("resize event detected!");
    odinlogo.style.width = "80px";
  
    navbar.style.flexDirection = "column";
    navbar.style.justifyContent = "center";
    navbar.style.height = "auto";
    navbar.style.padding = "0px";
    
    divname.style.fontSize = "2rem";
    div1.style.marginLeft = "-10px";
    // div2.style.marginRight = "0px";
    // div2.style.width = "100%";
    // div1.style.width = "100%";
    //list.style.width = "200px";
  
  // }
  }
//----------------------------------------------------footer------------------
//import mail from './envelope-fill.svg';
const image = new Image();
image.src = './envelope-fill.svg';
image.style.width = "30px";
image.style.fill = 'red';

//import git from './github.svg';
const image2 = new Image();
image2.src = './github.svg';
image2.style.width = "30px";
image2.style.marginLeft = "10px";

var footer = document.createElement('footer');
centeritems(footer);
footer.style.marginLeft = "-18px";    
footer.style.padding = "5px";    
footer.style.width = '100%';    
footer.style.position = "absolute";    
footer.style.bottom = "0";
footer.style.height = "90px";
footer.style.background = "gray";
footer.style.flexDirection = "column";

var gingerm = document.createElement('a');
centeritems(gingerm);
gingerm.textContent = '\xA9 2024 Ginger Media';
gingerm.style.fontSize = '12px'; 
gingerm.style.color = "white";
gingerm.style.textDecoration = "none";
gingerm.setAttribute("href","https://github.com/eduarmarin");
gingerm.appendChild(image2);

var linkm = document.createElement('a');
centeritems(linkm);
linkm.setAttribute("href","mailto:donsecun@gmail.com");
linkm.style.fontSize = '12px'; 
linkm.textContent = 'Contact ';
linkm.style.color = "white";
linkm.style.gap = "10px";
linkm.style.textDecoration = "none";

linkm.appendChild(image);
footer.appendChild(gingerm); // add second div to navbar
footer.appendChild(linkm);

function centeritems(item){
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.justifyContent = "center";
}

document.body.appendChild(footer);
document.body.appendChild(navbar);