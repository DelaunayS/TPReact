import React,{useState} from 'react';

function translateOneLetter(str){
    let cesarArray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let index=cesarArray.indexOf(str)    
    
    if (index !==-1 & index<13){
        str=cesarArray[index+13]
    }else if (index>=13){
        str=cesarArray[index-13]
    }
    
   return(str)
}

function rot13(str) {
    let newWord=''
        
    for (let i=0;i<str.length;i++){
        newWord=newWord+translateOneLetter(str.substr(i,1).toUpperCase())          
    }
  
    return newWord;
  }

function App2(){
    const [word,setWord]=useState('') ;  
    let newWord=rot13(word)

  return (
    <div className="container-fluid border border-dark pt-1 pb-1">
      <h1 className="text-center">Message chiffré par décalage</h1>
      <br/>
      <div className="row justify-content-center">          
               <input placeholder="Taper votre message ici" onChange={event=>setWord(event.target.value)}></input>
      </div>
      <div className="row justify-content-center">  
          <div className="col-4 border border-dark bg-white m-1">
          {newWord}
          </div>          
      </div>      
    </div>
  );  
};

export default App2;