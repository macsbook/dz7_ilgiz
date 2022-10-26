let winnerScore = [0, 0]
let computerSelect = Math.floor(Math.random()*3)


class Gam{
    constructor(player,computer){
        this.playerChoice = player
        this.computerChoice = computer
        this.winner =  [0,0]
    }

    get getplay(){
        if (this.computerChoice === 3) {
            this.computerSelect = "Камень";
        } else if (this.computerChoice === 2) {
            this.computerSelect = "Бумага";
        } else {
            this.computerSelect = "Ножницы";
        }
        return  this.computerSelect
    }
    get compares(){
        if (this.playerChoice === "Камень" && this.computerSelect === "Бумага") {
            return this.compare="Компьютер";}
        else if (this.playerChoice === "Бумага" && this.computerSelect === "Ножницы") {
            return this.compare="Компьютер";}
        else if (this.playerChoice === "Ножницы" && this.computerSelect === "Камень") {
            return this.compare="Компьютер";
        }else if(this.playerChoice === this.computerSelect){
            return this.compare = "Ничья"
        }else{
            return this.compare = "Игрок"
        }
    }

    get checkWinner(){
        if (this.compare === "Игрок") {
            this.winner[0]++
        }else if (this.compare === "Компьютер") {
            this.winner[1]++;
        } else if (this.compare === "Ничья" ) {
            this.winner[0]++;
            this.winner[1]++;
        }
    }

}

const btn = document.querySelector('button')
const h2node = document.querySelector('h2')
const h3ode = document.querySelector('h3')
const h4node = document.querySelector('h4')
function StartGame(){
    let game =  new Gam(prompt(),computerSelect)
    alert(`выбрал ${game.getplay}`)
    h2node.innerHTML = game.getplay
    alert(`выиграл ${game.compares}`)
    h3ode.innerHTML = game.compares
    console.log(game.checkWinner)
    h4node.innerHTML= game.winner
    alert(game.winner)
}

btn.addEventListener('click',StartGame)
