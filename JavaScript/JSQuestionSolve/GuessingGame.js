const num = prompt("enter the max no.");
const random = Math.floor(Math.random()*num)+1;
let guess = prompt("enter the guess no.");
while(true){
   if(guess =="quit"){
      console.log("your quite");
      break;
   }
   else if (guess == random){
      console.log("your are right Congrat !! random number was ",random);
      break ;
   }
   else if ( guess<random){
      guess = prompt("hint : you guess no too small .Please enter the  larg no. ");
   }
   else if( guess>random){
      guess = prompt("hint: you guess no. too larg no . Please enter the small no. ");
   }
   else{
      guess = prompt("invalid no. please is valid no.");

   }
}