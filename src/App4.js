import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Letter from './Letter.js'
import LIFECOUNTER from './LifeCounter';
import ARRAY_OF_MYSTERY_WORLD from './ArrayOfMysteryWorld'

const ANIMAL =(['LION','RENARD','CHIEN','PUMA','LAMA','COCHON']);
var MYSTERYWORD=ANIMAL[Math.floor(Math.random()*6)]
var NUMBERLETTERTOWIN

// on calcule le nombre de lettres à trouver et éviter les doublons dans le calcul pour gagner
function numberGoodLetter(word){
    let test=word
    let newWordToWin=''
      for (let i=0;i<word.length;i++){
        if (test.includes(word[i])&& !newWordToWin.includes(word[i])){
          newWordToWin=newWordToWin+word[i]
        }
      }    
      return NUMBERLETTERTOWIN=newWordToWin.length
}

numberGoodLetter(MYSTERYWORD)

function App4(){ 

    const   [letters,setLetters]=useState([]) //stocke la lettre cliquée
    const   [lettersMiss,setLettersMiss]=useState([]) //stocke les mauvais choix
    const   [lettersFind,setLettersFind]=useState([]) // stocke les bonnes réponses      
    let colorBackgroundWin={backgroundColor:''}
    let colorBackgroundLose={backgroundColor:''}        

   // ce qui se passe quand on appuie sur une lettre
    function onClickLetter(e){
        setLetters(e+letters)  // on grise et on bloque  la lettre
        if (MYSTERYWORD.includes(e)){
          setLettersFind(e+lettersFind)
        }else{
          setLettersMiss(e+lettersMiss)
        }           
    }
     
    //gère les cas de fin de partie
    function endOfTheGame(){
      
      function commun(){
        document.getElementById('zoneDesLettres').hidden=true //cache les lettres
        document.getElementById('zonePourRejouer').hidden=false // affiche le bouton pour rejouer
      }
       //si gagné
      if (lettersFind.length===NUMBERLETTERTOWIN){
        colorBackgroundWin={backgroundColor:'green'} // fond vert dans la case gagnée
        commun()
        
      }
      
      //si perdu
      if (lettersMiss.length===7){      
        colorBackgroundLose={backgroundColor:'red'} // fond rouge dans la case perdue
        commun()
        ReactDOM.render('La réponse était : '+MYSTERYWORD,document.getElementById('bonneRéponse'))  
         
      } 
  }  
    function reInitialise(){
      setLetters([]) //stocke la lettre cliquée
      setLettersMiss([]) //stocke les mauvais choix
      setLettersFind([])// stocke les bonnes réponses      
      colorBackgroundWin={backgroundColor:''}
      colorBackgroundLose={backgroundColor:''} 
      document.getElementById('zoneDesLettres').hidden=false  //cache les lettres 
      document.getElementById('zonePourRejouer').hidden=true // affiche le bouton pour rejouer 
      MYSTERYWORD=ANIMAL[Math.floor(Math.random()*6)]
      numberGoodLetter(MYSTERYWORD)
      ReactDOM.render('',document.getElementById('bonneRéponse'))
    }
  
    endOfTheGame() //vérifie si la partie est finie

    return(

        <div className="container-fluid border border-dark pt-1 pb-1">
          <div className="container-fluid" id="title">
            <h2 className="row justify-content-center text-center">Pendu simplifié des animaux</h2>
          </div>
          <br />

          <div className="row justify-content-center m-1">         
          <div className="col-5 text-center border border-dark" style={colorBackgroundWin}>
              Gagné
          </div>
          <div className="col-5 text-center border border-dark " style={colorBackgroundLose}>
              Perdu
          </div>
      </div>

          <div className="container-fluid col-8">

            <div id="masque">
                <LIFECOUNTER lettersMiss={lettersMiss}/>
                <ARRAY_OF_MYSTERY_WORLD
                content={MYSTERYWORD}
                lettersFind={lettersFind}                 
                />                      
            </div>
            
          <br />
            <div id="zoneDesLettres">
            <Letter
                onClick={onClickLetter}
                letters={letters}                           
                /> 
            </div>
            <div className="text-center" id="zonePourRejouer" hidden={true}>
              <p><span id='bonneRéponse'></span></p>
              <button onClick={reInitialise}>Voulez-vous rejouer ?</button>
            </div>
          </div>  
                
        </div>

    )
}

export default App4