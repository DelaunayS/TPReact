import React from 'react'

const ALPHABET1="ABCDEFGHIJKLM".split("")
const ALPHABET2="NOPQRSTUVWXYZ".split("")

// Crée les boutons des lettres et renvoie la lettre cliquée
const CHOICELETTER =({onClick, letters,disabled=false})=>(
        <div>
            <div className="letters-buttons row justify-content-center">
                {ALPHABET1.map((letter,index)=>(
                    <button
                        key={index}
                        disabled={letters.includes(letter)
                        ? true
                        :false}
                        onClick={() => onClick(letter)}
                        className={letters.includes(letter)
                            ?"btn-secondary m-1"
                            :"m-1" }
                    >
                        <span>{letter}</span>
                    </button>
                ))}
            </div> 
            <div className="letters-buttons row justify-content-center">
                {ALPHABET2.map((letter,index)=>(
                    <button
                        disabled={letters.includes(letter)
                        ? true
                        :false}
                        key={index}
                        onClick={() => onClick(letter)}
                        className={letters.includes(letter)
                            ?"btn-secondary m-1 disabled:{true}"
                            :"m-1" }
                    >
                        <span >{letter}</span>
                    </button> 
                    ))}
            </div>  
    </div>  
)        

export default CHOICELETTER