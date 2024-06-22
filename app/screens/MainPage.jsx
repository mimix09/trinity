import { useNavigate } from "react-router-dom";

import "../style/mainPagestyl.css";

function MainPage(){
    const navigation = useNavigate();

    
    const doStrony = (x) =>{
        navigation(x);
    }


    return (
        <div className="mainPageContainer">
            <div className="glown-menu">
                <a onClick={() => doStrony("/1")}>Grafik</a>
                <a onClick={() => doStrony("/2")}>Koło Fortuny</a>
                <a onClick={() => doStrony("/3")}>kalenarz?</a>
                <a onClick={() => doStrony("/4")} >inne</a>
            </div>
        </div>
    );
}

export default MainPage;