const secretNumber=Math.trunc(Math.random()*50)+1;
let chance = 50;
let highScore = 0;


document.querySelector('.check').addEventListener('click',function(){
   const guessNumber=Number(document.querySelector('.guess').value);
   if(!guessNumber){
    document.querySelector('.message').textContent='Please Enter Any Number🚫'
   }
   else if(guessNumber == secretNumber){
    document.querySelector('.message').textContent='Congratulations🍷 Buddy You Did It.Have Some Wine.'
    document.querySelector('body').style.backgroundColor='#60b347'
    document.querySelector('.number').textContent=secretNumber;
    if(chance > highScore){
        highScore=chance;
        document.querySelector('.highscore').textContent = highScore;
    }

   }else if(guessNumber > secretNumber){
    if(chance > 1){
        document.querySelector('.message').textContent='Sorry Bro 😭 Try Again. hints: Too High'
        chance--;
        document.querySelector('.score').textContent=chance;
    }else{
        document.querySelector('.message').textContent='Shit Bro 🤦‍♂️ You Lost The Game. ';
        document.querySelector('.score').textContent=0;

    }
     
   }
   else if(guessNumber < secretNumber){
    if(chance > 1){
        document.querySelector('.message').textContent='Sorry Bro 😭 Try Again. hints: Too Low'
        chance--;
        document.querySelector('.score').textContent=chance;
      
    }else{
        document.querySelector('.message').textContent='Shit Bro 🤦‍♂️ You Lost The Game. ';
        document.querySelector('.score').textContent=0;

    }
     
   }
})

document.querySelector('.again').addEventListener('click',function(){
    chance = 50;
    document.querySelector('.score').textContent=chance;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent='Start guessing...'
})