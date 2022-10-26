// Horoscope Random Message generator. 
//------------------------------------

// Sign generator function. 
//------------------------
const signGenerator = () => {
    let singNum = Math.floor(Math.random() * 13); 
    switch (singNum) {
        case 1:
             return 'Aries'
            break;
        case 2:
             return 'Taurus'
            break;
        case 3:
             return 'Gemini'
            break;               
        case 4: 
             return 'Cancer'
            break;
        case 5: 
             return 'Leo'
            break; 
        case 6: 
             return 'Virgo'
            break;
        case 7: 
             return 'Libra'
            break; 
        case 8: 
             return 'Scorpio'
            break;
        case 9: 
             return 'Sagittarius'
            break; 
        case 10: 
             return 'Capricorn'
            break; 
        case 11: 
             return 'Aquarius'
            break;             
        default:
             return 'Pisces'
            break;
    }
}
// Validate signs
//console.log(signGenerator());

// Say hello to signs 
//-----------------------
const sayHelloFunct = (sign) => {
  return `Hello, I can see that your sign is ${sign}`;
} 
// Test Hello sign 
//console.log(sayHelloFunct(signGenerator()));


// Random phrases generator function 
//----------------------------------
const randomPhrases = () => {
    let phrase1Num = Math.floor(Math.random() * 13);
    let phrase1 = '';
    let phrase2 = `But everything is going to be ok at the end, and if it is not ok, it's not the end`;
    switch (phrase1Num) {
        case 1:
            phrase1 = 'You might be feeling a little lost or irritated right now';
            break;
        case 2:
            phrase1 = 'Whether you are single or in a committed relationship, you may have noticed a sudden surge in romantic themes and imagery';
            break;
        case 3:
            phrase1 = ' If you`re feeling uninspired by your dating prospects, you`re not alone.';
            break;               
        case 4: 
             phrase1 = 'You may not have given much attention to certain potential love interests in your close area in the past';
            break;
        case 5: 
             phrase1 = 'You will have the inclination to share some exciting news about a recent change in your romantic life';
            break; 
        case 6: 
             phrase1 = 'You`ll need to put all of your diplomatic abilities to use';
            break;
        case 7: 
             phrase1 = 'Today, be on the lookout for a fleeting chance for love fulfilment that may come your way';
            break; 
        case 8: 
             phrase1 = 'The day has promise for the growth of your connection';
            break;
        case 9: 
             phrase1 = 'Today, romance has an element of the unexpected';
            break; 
        case 10: 
             phrase1 = 'The day`s momentum propels you to take a few more risks and push your limits';
            break; 
        case 11: 
             phrase1 = 'You tend to bury your head in the sand and pretend like everything`s alright instead of facing up to the fact that there are issues in your relationships';
            break;             
        default:
            phrase1 = 'Today you feel compelled to make an effort to showcase an original facet of your existing partnership';
            break;
    }
  
    return 'It seems like, ' + phrase1 + '\n' + phrase2;
}

console.log(sayHelloFunct(signGenerator()));
console.log(randomPhrases());