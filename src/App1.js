import React,{useState} from 'react';

function palindrome(str) {

    str=str.toLowerCase()
    const regex=/[^a-z|^0-9]/gm
    str=str.replace(regex,'');  
    
    let arrayTestWord=[]
    let newWord=''
    let test=false
    
    for (let i=str.length-1; i>=0;i--){
      arrayTestWord.push(str.substr(i,1))
    }
    
    for (let j=0; j<arrayTestWord.length;j++){
      newWord=newWord+arrayTestWord[j]
    }
    
    if(str===newWord){
      test=true
    }
    
    return test
}

function App1(){
    const [word,setWord]=useState('') ;     
    let colorBackgroundNo={backgroundColor:'red'}
    let colorBackgroundYes={backgroundColor:''}  
    
    if (palindrome(word)===true && word.length>2){
        colorBackgroundNo={backgroundColor:''}
        colorBackgroundYes={backgroundColor:'green'}
    }                    

  return (
    <div className="container-fluid border border-dark pb-1">
      <h1 className="text-center">Palindrome</h1>
      <div className="row justify-content-center">
          <div className="col text-center">
          <input placeholder="Taper votre mot ici " onChange={event=>setWord(event.target.value)}></input>
          </div>
      </div>
      
      <div className="row justify-content-center m-1">         
          <div className="col-3 text-center border border-dark" style={colorBackgroundYes}>
              Oui
          </div>
          <div className="col-3 text-center border border-dark " style={colorBackgroundNo}>
              Non
          </div>
      </div>
      
    </div>
  );  
};

export default App1;