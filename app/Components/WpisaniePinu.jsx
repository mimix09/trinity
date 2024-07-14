import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../../src/firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';

import '../style/wpisaniePinuStyl.css';

function WpisaniePinu(){
    const navigation = useNavigate();
    const [pin, setPin] = useState(0);
    const [komunikat, setKomunikat] = useState('');
    const [proby, setProby] = useState(0);

    const doStrony = () => {
        navigation("/4");
    }

    const tooManyTry = () => {
        if(proby == 2){
            setKomunikat("Sola nawet nie probuj🤫");
        }
    }

    async function sprawdzaniePinu(){
        const q = query(collection(db, "hasla"), where("pin", "==", pin));
        const querySnapshot = await getDocs(q);
        const tab = [];

        querySnapshot.forEach((doc) => {
            tab.push(doc.id);
        });

        if(tab.length == 1){
            doStrony();
        }else{
            setKomunikat("Zle haslo");
            setProby(proby + 1);
            tooManyTry();
        }
    }

    const filtrowanie = (event) => {
        const value = event.target.value;
        setKomunikat('');
        if(value.length == 4){
            if(!isNaN(value)){
                setPin(Number(value));
                sprawdzaniePinu();
            }else{
                setKomunikat("wpisz numer");
            }
        }
    }

    return(
        <div className="pin-container">
            <div>
                <h1>Wprowadź PIN</h1>
                <input type="text" maxLength="4" onChange={filtrowanie} inputMode="numeric"/>

                {komunikat.length > 1 && <h3>{komunikat}</h3>}
            </div>
        </div>
    )
}

export default WpisaniePinu;