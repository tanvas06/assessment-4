
const heroContainer = document.querySelector(`#hero-container`)
const baseURL = "http://localhost:4000/api/compliment/"

const form = document.getElementById(`fortuneForm`)
const form2 = document.getElementById(`superChar`)

// const fortuneCallback = ({ data: fortune }) => displayMovies(fortune)

const heroCallback = ({ data: hero }) => displayHeros(hero)

const getAllHeros = () => axios.get("http://localhost:4000/api/hero/").then(heroCallback)

const addFortune = body => axios.post("http://localhost:4000/api/fortune/", body).then(fortuneCallback)

const addHero = body => axios.post("http://localhost:4000/api/hero/", body).then(heroCallback)

// const editHero = (id,type) =>axios.put(`${"http://localhost:4000/api/hero/"}/${id}`, {type: type}).then(heroCallback)

const updateHero = (id, type) => axios.put(`http://localhost:4000/api/hero/${id}`, {type}).then(heroCallback)

const deleteHero = id => axios.delete(`${"http://localhost:4000/api/hero/"}${id}`).then(heroCallback)


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
    let Strength = document.querySelector('input[name="Strength"]:checked')
    // let powers = document.querySelector(`#powers`)
    let imageURL = document.querySelector(`#img`)
    
    let bodyObj2 = {
        name: name.value,
        Strength: +Strength.value,
        // powers: powers.value,
        imageURL: imageURL.value
    }
    addHero(bodyObj2)
    name.value = ``
    Strength.checked = false
    // powers.value = ``
    imageURL.value = ``
}

function createHeroCard(hero) {
    const heroCard = document.createElement('div')
    heroCard.classList.add('hero-card')

    heroCard.innerHTML = `<img alt='hero cover' src=${hero.imageURL} class="hero-cover"/>
    <p class="hero-title">${hero.name}</p>
    <div class="btns-container">
        <button onclick="updateHero(${hero.id}, 'minus')">-</button>
        <p class="movie-rating">${hero.Strength} stars</p>
        <button onclick="updateHero(${hero.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteHero(${hero.id})">delete</button>
    `


    heroContainer.appendChild(heroCard)
}

function displayHeros(arr) {
    heroContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createHeroCard(arr[i])
    }
}

form2.addEventListener(`submit`, submitHero)
form.addEventListener(`submit`, submitFortune)

getAllHeros()
