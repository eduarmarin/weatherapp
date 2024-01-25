import mail from './envelope-fill.svg';
const image = new Image();
image.src = mail;
image.style.width = "30px";
image.style.fill = 'red';

import git from './github.svg';
const image2 = new Image();
image2.src = git;
image2.style.width = "30px";
image2.style.marginLeft = "10px";

var footer = document.createElement('footer');
centeritems(footer);
footer.style.width = "80%";    
//footer.style.position = "absolute";    
footer.style.height = "120px";
footer.style.background = "gray";
//footer.style.color = "white";
footer.style.flexDirection = "column";

var gingerm = document.createElement('a');
centeritems(gingerm);
gingerm.textContent = '\xA9 2023 Ginger Media';
//gingerm.style.margin = "0px"
gingerm.style.color = "white";
gingerm.style.textDecoration = "none";
gingerm.setAttribute("href","https://github.com/eduarmarin");
gingerm.appendChild(image2);

var linkm = document.createElement('a');
centeritems(linkm);
linkm.setAttribute("href","mailto:donsecun@gmail.com");
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

export default footer; // everything must go inside this to be used by index.js