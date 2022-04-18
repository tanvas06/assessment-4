let fortunes = [`Rest has a peaceful effect on your physical and emotional health.`, `Resting well is as important as working hard.`, `Romance moves you in a new direction.`, `Savor your freedom – it is precious.`, `Say hello to others. You will have a happier day.`];
let globalID = 1;
let heros = [];

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",
    ];
    
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    
    res.status(200).send(randomCompliment);
    
},
getFortune: (req,res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    
    res.status(200).send(randomFortune)
},
addFortune: (req,res) => {
          const {fortune} = req.body
          let newFortune = fortune
          
          fortunes.push(newFortune)
          console.log(fortunes)
      },
      getHeros: (req,res) => {
          res.status(200).send(heros)
      },

      addHero: (req,res) => {
          const {name, Strength, imageURL} = req.body
          let newHero = {
              id: globalID,
              name,
              Strength,
              imageURL
          }
          heros.push(newHero)
          res.status(200).send(heros)
          globalID++
          console.log(heros)
      },
      updateHero: (req,res) => {
        const {id} = req.params;
        const body = req.body;
        let index = heros.findIndex(elem => +elem.id === +id)
        console.log(heros[index]);
        if(body['type'] === 'minus' && heros[index].Strength > 0){
            heros[index].Strength -= 1;
            res.status(200).send(heros);
        } else if(body['type'] === `plus` && heros[index].Strength < 5){
            heros[index].Strength += 1;
            res.status(200).send(heros);
        } else {
            res.status(400).send(`Something went wrong`)
        }
      },
      deleteHero: (req,res) => {
        let index = heros.findIndex(elem => elem.id === +req.params.id)
        heros.splice(index, 1);
        res.status(200).send(heros);
      }
}