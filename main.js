let myjson = {
  "destinations": [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ],
  "crew": [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  "technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
};



//------------------------------------------

/*============= Toggle  Menu =============*/
let barsIcon = document.querySelector('.bars');
let closeIcon = document.querySelector('.close');
let links = document.querySelector('.links');
barsIcon.onclick = function () {
  this.style.display = "none";
  links.style.display ="block";
  closeIcon.style.display = "block";
};
closeIcon.onclick = function(){
  links.style.display="none";
  barsIcon.style.display = "block";
  closeIcon.style.display = "none";
};
window.onresize = _ => {
  if (window.innerWidth >= 767) {
    links.style.cssText = "justify-content:center;";
    closeIcon.style.display = "none";
    barsIcon.style.display = "none";
  }else{
    closeIcon.style.display = "block";
    barsIcon.style.display = "block";
  }
};
/*============= Toggle  Menu =============*/

/*============= handle content =============*/
let  changeHandle = document.querySelector("#changeHandle"); //global var to push content

function renderDest(variable) {

  let count = variable || 0 ;
  let dest = myjson["destinations"][count];

  document.body.style.setProperty("background-image" , `url(./assets/destination/background-destination-desktop.jpg)` );

  changeHandle.innerHTML = `
    <div class='dest-container' style='transition: all .5s ease'>
      <h2><span>01</span>Pick your destination</h2>
      <section class="dest">
        <div class="img">
          <img src="${dest['images']['png']}">
        </div>
        <div class="content">
          <ul class="ul-for"> </ul>
          <h1>${dest['name']}</h1>
          <p>${dest['description']}</p>
          <div class="results">
            <div class="left">
              <p>AVG. DISTANCE</p>
              <h2>${dest['distance']}</h2>  
            </div>
            <div class="right">
              <p>Est. travel time</p>
              <h2>${dest['travel']}</h2>
            </div>
          </div>
        </div>urley
      </section>
    </div>
  `;
  let ul  = document.querySelector('.ul-for')
  for (let i = 0; i < myjson["destinations"].length; i++) {
    if (myjson["destinations"][i]['name'].toLowerCase() == dest['name'].toLocaleLowerCase() ) {
      ul.innerHTML += `<li style='border-bottom:3px solid #fff' >${myjson["destinations"][i]['name']}</li>`;
    }else{
      ul.innerHTML += `<li >${myjson["destinations"][i]['name']}</li>`;
    }
    
  }

  //add event listener on list items
  let lis = document.querySelectorAll(".ul-for li" );
    lis.forEach((e) => {e.addEventListener('click', function () {
      
      let handle = this.innerText;
      if (handle == "mars".toUpperCase()) {
        count = 1;
        renderDest(count);
      }else if (handle == "europa".toUpperCase()) {
        count = 2;
        renderDest(count);
      }else if (handle == "Titan".toUpperCase()) {
        count = 3;
        renderDest(count);
      }else{
        renderDest(0);
      }

    }
  )});
}


function renderCrew ( variable) {

  let count = variable || 0 ;
  let crew = myjson["crew"][count];

  document.body.style.setProperty("background-image" , `url(./assets/crew/background-crew-desktop.jpg)`);

  changeHandle.innerHTML = `
    <div class="crew-container" style='transition: all .5s ease'>
    <h2><span>02</span>Meet your crew</h2>
      <div class="inner-crew">
        <div class="content">
          <h2>${crew["role"]}</h2>
          <h1>${crew["name"]}</h1>
          <p>${crew["bio"]}</p>
          <ul class="ul-boolets"> </ul>
        </div>
        <div class="img">
          <img src="${crew['images']['png']}" alt= "..." >
        </div>
      </div>
    </div>
  `;

  let ul  = document.querySelector('.ul-boolets')
  for (let i = 0; i < myjson["crew"].length; i++) {
    if (myjson["crew"][i]['name'].toLowerCase() == crew['name'].toLocaleLowerCase() ) {
      ul.innerHTML += `<li style='background-color: #fff' ><span style="opacity:0">${myjson["crew"][i]['name']}</span></li>`;
    }else{
      ul.innerHTML += `<li ><span style="opacity:0">${myjson["crew"][i]['name']}</span> </li>`;
    }
    
  }

  //add event listener on list items
  let lis = document.querySelectorAll(".ul-boolets" );
    lis.forEach((e) => { e.addEventListener('click', function (e) {
      
      let handle = e.target.innerText;
      console.log(e.target.innerText);
      if (handle == "Mark Shuttleworth") {
        count = 1;
        renderCrew(count);
      }else if (handle == "Victor Glover") {
        count = 2;
        renderCrew(count);
      }else if (handle == "Anousheh Ansari") {
        count = 3;
        renderCrew(count);
      }else{
        renderCrew(0);
      }

    }
  )});

  
}

function renderTech ( ) {

}

function handlingDomContent (title) {
  if (title == "DESTINATION") {
    renderDest();
  }
  else if(title == "CREW"){
    renderCrew();
  }
  else if(title == "TECHNOLOGY"){
    renderTech();
  }
  else if(title == "HOME"){
    document.body.style.setProperty("background-image" , `url(./assets/home/background-home-desktop.jpg)`)
    changeHandle.innerHTML=`
    <div class="container">
    <div class="text-content">
    <h5>So, you want to travel to</h5>
    <h1>Space</h1>
    <p> 
    Let’s face it; if you want to go to space, you might as well genuinely go to 
    outer space and not hover kind of on the edge of it. Well sit back, and relax 
    because we’ll give you a truly out of this world experience!
    </p>
    </div>
    <div class="btn">
    <a href="">Explore</a>
    </div>
    </div>`;
  }
  
}

/*============= handle content =============*/

/*============= Toggle  active class ============= */
let lis = document.querySelectorAll(".links ul li");
lis.forEach(li =>{

  li.addEventListener("click",function () {
    lis.forEach(item=> item.classList.remove("active"));
    this.classList.add("active")

    if (li.classList.contains('active')) {

      if ( +li.lastElementChild.innerText[0] == 0  ) {
        title = li.lastElementChild.innerText.replaceAll(/\d\s/gi,'').slice(1);
      }else{
        title = li.lastElementChild.innerText;
      }
      handlingDomContent(title);
      console.log(title);
    }
  })

});
/*============= Toggle  active class ============= */

