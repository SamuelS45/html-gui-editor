import React, {useState} from "react";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import {MdTitle} from 'react-icons/md'
import {BsTextParagraph} from 'react-icons/bs'
function App(){
    const[layout, setLayout] = useState([])
    function clickHandler(e){
        if(e ==='t'){
            setLayout(prevState=>[...prevState, <Title/>])
        }
        else if(e ==='p'){
            setLayout(prevState=>[...prevState, <Paragraph/>])
        }
    }
    return(
        <>
        <div className="menu">
            <ul className="menu-ul">
                <li className="menu-li"><button className="menu-btn" onClick={()=>clickHandler('t')}><MdTitle size={'1x'}/></button></li>
                <li className="menu-li"><button className="menu-btn" onClick={()=>clickHandler('p')}><BsTextParagraph size={'1x'}/></button></li>
            </ul>
        </div>
        <div className="app">
            <div className="doc">
                {layout}
            </div>
        </div>
        </>
    )
}

export default App