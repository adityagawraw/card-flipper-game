const cards = document.querySelectorAll(".card");
shuffle();

let firstCard, secondCard;
let hasFlipped = false;
let lockboard = false;
function flipcard() {
    if (lockboard) {

        return;
    }
    if (this === firstCard) return;
    this.classList.toggle('flip');
    if (!hasFlipped) {
        firstCard = this;
        hasFlipped = true;
    }
    else {
        secondCard = this;
        hasFlipped = false;
    }
    if (firstCard.dataset.image === secondCard.dataset.image) {
        firstCard.removeEventListener('click', flipcard);
        secondCard.removeEventListener('click', flipcard);
        secondCard = null;
    }
    else {
        console.log(firstCard, secondCard)
        lockboard = true
        setTimeout(() => {
            firstCard.classList.toggle('flip');
            secondCard.classList.toggle('flip');
            secondCard = null;
            lockboard = false
        }, 1500)


    }
}

function shuffle(){
    cards.forEach((card)=>{
        let randomInt =Math.floor(Math.random()*12)
        card.style.order=randomInt;
    })

}
function reset (){
    document.querySelector('.flip').classList.toggle('flip');
    shuffle();

}

cards.forEach((card) => card.addEventListener('click', flipcard))