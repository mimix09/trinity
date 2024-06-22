import { useNavigate } from "react-router-dom";
import { useState } from "react";
import WpisaniePinu from "../Components/WpisaniePinu";

import "../style/mainPagestyl.css";

function MainPage(){
    const navigation = useNavigate();
    const [entryPin, setEntryPin] = useState(false);
    
    const doStrony = (x) =>{
        navigation(x);
    }

    return (
        <div className="mainPageContainer">
            <div className="glown-menu">
                <a onClick={() => doStrony("/1")}>grafik</a>
                <a onClick={() => doStrony("/2")}>koło Fortuny</a>
                <a onClick={() => doStrony("/3")}>kalenarz?</a>
                <a className="niedostepne" onClick={() => setEntryPin(!entryPin)} >inne</a>
            </div>

            {entryPin && <WpisaniePinu />}

        </div>
    );
}

export default MainPage;