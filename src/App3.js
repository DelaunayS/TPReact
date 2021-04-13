import React,{useState} from 'react';

function translateNumToString(num){
    let letter
    switch(num){
        case 1 :
            letter="I"
            break
        case 4 :
            letter="IV"
            break
        case 5 :
            letter="V"
            break
        case 9 :
            letter="IX"
            break
        case 10 :
            letter="X"
            break
        case 40 :
            letter="XL"
            break
        case 50 :
            letter="L"
            break
        case 90 :
            letter="XC"
            break
        case 100 :
            letter="C"
            break
        case 400 :
            letter="CD"
            break
        case 500:
            letter="D"
            break
        case 900 :
            letter="CM"
            break
        case 1000 :
            letter="M"
            break  
        default : 
            letter=''          
    }
    return letter
}

function convertToRoman(num) {
    let arrayNumber=[]
    let arrayLetter=[]
    let word=''
                 
        while(num>=1000){
                if ((Math.floor(num/1000))*1000===9000 || (Math.floor(num/1000))*1000===4000 || (Math.floor(num/1000))*1000===5000){
                    arrayNumber.push((Math.floor(num/1000))*1000)
                    num=num-(Math.floor(num/1000))*1000
                }
            else if(num<9000 & num>5000){
                arrayNumber.push(5000)
                num=num-5000
            }else{
                arrayNumber.push(1000)
                num=num-1000
            }
        }
       
        while(num>=100){
            if ((Math.floor(num/100))*100===900 || (Math.floor(num/100))*100===400 || (Math.floor(num/100))*100===500){
                arrayNumber.push((Math.floor(num/100))*100)
                num=num-(Math.floor(num/100))*100
            }
            else if(num<900 & num>500){
                arrayNumber.push(500)
                num=num-500
            }else{
                arrayNumber.push(100)
                num=num-100
            }
        }    
             
        while(num>=10){
            if ((Math.floor(num/10))*10===90 || (Math.floor(num/10))*10===40 || (Math.floor(num/10))*10===50){
                arrayNumber.push((Math.floor(num/10))*10)
                num=num-(Math.floor(num/10))*10
            }else if(num<90 & num>50){
                arrayNumber.push(50)
                num=num-50
            }else{
                arrayNumber.push(10)
                num=num-10
            }
        }     
    
        while(num >0){
            if ((Math.floor(num/1))*1===9 || (Math.floor(num/1))*1===4 || (Math.floor(num/1))*1===5){
                arrayNumber.push((Math.floor(num/1))*1)                             
                num=num-(Math.floor(num/1))*1                        
            }
            else if(num<9 & num>5){
                arrayNumber.push(5)
                num=num-5                               
            }else{
                arrayNumber.push(1)
                num=num-1                                  
            }  

    console.log(arrayNumber)
        }
    for (let i=0; i<arrayNumber.length;i++){
        arrayLetter.push(translateNumToString(arrayNumber[i]))
    }    
    
    for (let i=0;i<arrayLetter.length;i++){
        word=word+arrayLetter[i]
    }   
    
    return word
} 

function App3(){
    const [number,setNumber]=useState('') ;
    var result
    var textError='Votre nombre doit être en 1 et 3999'
    if (number>=1 && number <4000){
        result=convertToRoman(number)
    }else if (number>3999){
        result=textError
    }
    else if (number<0){
        result=textError
    }else{
    result=""
    }       
  
  return (
    <div className="container-fluid border border-dark pt-1 pb-1">
      <h1 className="text-center">Convertisseur en nombre romain</h1>
      <h5 className="text-center">Entre 1 et 3999</h5>
      
      <div className="row justify-content-center">
          <div className="col-xs-2 m-1 ">
               <input type="number" placeholder="Taper votre nombre ici" onChange={event=>setNumber(event.target.value)}></input>
          </div>
      </div>
      
      <div className="row justify-content-center">
          <div className="col-8 text-center bg-dark text-white m-1">
                {result}
          </div>          
      </div>
      
    </div>
  );  
};

export default App3;