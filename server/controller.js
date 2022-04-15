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

      addHero: (req,res) => {
          const {name, imageURL} = req.body
          let newHero = {
              id: globalID,
              name,
              imageURL
          }
          heros.push(newHero)
          res.status(200).send(heros)
          globalID++
          console.log(heros)
      },
      editHero: (req,res) => {
        const {id} = req.params;
        const {type} = req.body;
        let index = heros.findIndex(elem => +elem.id === +id)
        if(type === 'minus' && heros[index].rating > 0){
            heros[index].rating -= 1;
            res.status(200).send(heros);
        } else if(type === `plus` && heros[index].rating < 5){
            heros[index].rating += 1;
            res.status(200).send(heros);
        } else {
            res.status(400).send(`Something went wrong`)
        }
      }
}