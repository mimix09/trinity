import { useState } from 'react';
import '../style/wpisaniePinuStyl.css';

function WpisaniePinu(){
    const [pin, setPin] = useState('');

    const filtrowanie = (event) => {
        const value = event.target.value;
        if(!isNaN(value)){
            setPin(Number(value));
        }else{
            console.log("nop");
            // dopisac komunakt ktory bedzie sie wypisywal po wpisaniu tekstu
        }
        
    }

    return(
        <div className="pin-container">
            <h1>Wprowadź PIN</h1>

            <input type="text" maxLength="4"  onChange={filtrowanie} inputMode="numeric"/>
          
        </div>
    )
}

export default WpisaniePinu;