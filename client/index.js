
const heroContainer = document.querySelector(`#hero-container`)
const baseURL = "http://localhost:4000/api/compliment/"

const form = document.getElementById(`fortuneForm`)
const form2 = document.getElementById(`superChar`)

// const fortuneCallback = ({ data: fortune }) => displayMovies(fortune)
const heroCallback = ({ data: hero }) => displayHeros(hero)

const addFortune = body => axios.post("http://localhost:4000/api/fortune/", body).then(fortuneCallback)

const addHero = body => axios.post("http://localhost:4000/api/hero/", body).then(heroCallback)

const editHero = (id,type) =>axios.put(`${"http://localhost:4000/api/hero/"}/${id}`, {type}).then(heroCallback)


document.getElementById("complimentButton").onclick = function () {
    axios.get(baseURL)
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  
  
document.getElementById("fortune").onclick = function () {
      axios.get("http://localhost:4000/api/fortune/")
          .then(function (response) {
            const data = response.data;
            alert(data);
          });
    };
  

const submitFortune = (e) => {
    e.preventDefault()
    let fortune = document.querySelector(`#fortuneAdder`)
    
    let bodyObj = {
        fortune: fortune.value
    }
    addFortune(bodyObj)
    fortune.value = ``
}

const submitHero = (e) => {
    e.preventDefault()
    
    let name = document.querySelector(`#favHero`)
    let powers = document.querySelector(`#powers`)
    let imageURL = document.querySelector(`#img`)
    
    let bodyObj2 = {
        name: name.value,
        imageURL: imageURL.value
    }
    addHero(bodyObj2)
    name.value = ``
    imageURL.value = ``
}

function createHeroCard(hero) {
    const heroCard = document.createElement('div')
    movieCard.classList.add('hero-card')

    movieCard.innerHTML = `<img alt='hero cover' src=${hero.imageURL} class="hero-cover"/>
    <p class="hero-title">${hero.title}</p>
    <div class="btns-container">
        <button onclick="updateMovie(${hero.id}, 'minus')">-</button>
        <p class="movie-rating">${hero.rating} stars</p>
        <button onclick="updateMovie(${hero.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteMovie(${hero.id})">delete</button>
    `


    heroContainer.appendChild(heroCard)
}



form2.addEventListener(`submit`, submitHero)
form.addEventListener(`submit`, submitFortune)
