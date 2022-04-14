let isGameOver = false;

function rectangularCollision({rectangle1, rectangle2}) {
    return rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
    rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle2.attackBox.height >= rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
}
   
let timer = 60;
document.querySelector('#timer').innerHTML = timer;
   
function determineWinner({player, enemy}) {
       switch(true) {
           case player.health === enemy.health:
               document.querySelector('#result').innerHTML = 'Tie'
           break;
   
           case player.health > enemy.health:
               document.querySelector('#result').innerHTML = 'Player 1 wins'
           break;
   
           case player.health < enemy.health:
               document.querySelector('#result').innerHTML = 'Player 2 wins'
           break;
       }

       if(!isGameOver) {
        audio.pause();
        const victory = new Audio('./music/victory.mp3')

        playAudio(victory);
        isGameOver = true;
        }
}
   
function decreaseTimer() {
       if(timer > 0) {
           timer--;
           document.querySelector('#timer').innerHTML = timer;
       }
   
       if(timer === 0) {
           determineWinner({player, enemy});
       }
}

const playAudio = async (track) => {await track.play()}