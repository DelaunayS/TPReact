import React from "react";
import './ArrayOfMysteryWorld.css'

// définit la zone du mot mystère
const ARRAY_OF_MYSTERY_WORLD = ({ content, lettersFind}) => {
  const MYSTERYWORD = content.split(/[ ,]+/);
  const words = MYSTERYWORD.map(word => word.split(""));
  const letters = words.map((word, index) => (
    <div className={`word`} key={index}>
      {word.map((letter, index) => (
        <div   
          key={index}
          className={lettersFind.includes(letter) ? "finded" : ""}
        >
          <div id ="afficheLettre" className="m-1">{letter}</div>
        </div>
      ))}
    </div>
  ));
  return <section className="mysteryword">{letters}</section>;
};

export default ARRAY_OF_MYSTERY_WORLD;