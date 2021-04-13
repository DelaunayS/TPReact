import React from 'react'

// Vérifie s'il reste des essais
const LIFECOUNTER=({lettersMiss})=> {
    return(
        <div className="row justify-content-center">
            Essais restants : {7-lettersMiss.length}
        </div>
    )
}
export default LIFECOUNTER