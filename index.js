function scuberGreetingForFeet(someValue){
  // Write your code here!
  let customer = ''
  if (someValue <= 400)  {
    return customer = 'This one is on me!'
  } else if (someValue>400 && someValue <= 2000) {
      return customer = 'That will be twenty bucks.'
  } else if (someValue>2000 && someValue<=2500) {
      return customer = 'I will gladly take your thirty bucks.'
  } else if (someValue > 2500) {
      return customer = 'No can do.'
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous': {
      return  "Thank you so much.";
    }
    case 'not as generous' : {
      return "Thank you.";
    }
    default : {
      return "Bye."
    }
  }
  
}