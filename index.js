const names=['Guadalupe','Ollie','Aki'];
const event = "surprise";

 function writeCards( names, event ) {
  //new array defined
  let personalCards = []
  for ( let i = 0; i < names.length; i++ ) {
    //after the loop finishes and all of the messages have been added to the new array, return the new array.
    personalCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return personalCards;
}
 console.log(writeCards(names,"surprise"));

function countDown(){
  let Countdown=11;
  while(Countdown--){
    console.log(Countdown)
  }
} 

countDown();
 