import React from 'react'
import { useState, useEffect } from 'react'

const CreditCard =()=>{
  //  usestate
  const[cardNumber, setCardNumber] = useState(''); 

  //to check if it is valid  create one more useState
  const[isValid, setIsValid] = useState(null);

  //handle submit
 const handleSubmit = (event) =>{
    event.preventDefault();
    console.log('form')
    console.log('Form Date:' ,cardNumber);

    // to do validation
    const calc = digit => (digit*2 < 10) ? digit*2 : digit*2-9;
 const isValidNumber = card => {
  return ( card.split("")
  .map( (digit,index) => (index % 2 == 0) ? calc(digit): parseInt(digit,10))
  .reduce( (prv, cur) => prv + cur) % 10 == 0
  )

 }
  setIsValid(isValidNumber(cardNumber));
}
//handle chaqnge
// const handleChange = event => {
 // setForm({...form,[event.target.name]:event.target.value})
//}
  
 //useEffect
 useEffect(() => {
    if(cardNumber.length > 0 && cardNumber.length > 11){
        setIsValid(isValidNumber(cardNumber))
//  } else {setIsValid(null);}},[cardNumber]);
} else {setIsValid(false);}},[cardNumber]);
 return (
    <div>
         <form onSubmit ={handleSubmit}>
      <label>
        Credit Card Number 
        <input
          type=" text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
         <input type="submit" value="Submit Form" /> 
      </label>
      </form>
      {isValid !== null && (
        <p>{isValid ? 'Card is valid' : 'Card is not valid'}</p>
      )}
    </div>
  );
};

export default CreditCard;