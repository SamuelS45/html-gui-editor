import React, {useEffect, useState} from "react";
import '../style.css'
import {FaBold} from 'react-icons/fa'
import {ImParagraphLeft, ImParagraphCenter,ImParagraphRight} from 'react-icons/im'
function Title(){
    const[title, setTitle] = useState('')
    const[active, setActive] = useState([false])
    const[textAlign, setTextAlign] = useState(['left','center','right'])
    const[icon, setIcon] = useState([<ImParagraphLeft/>,<ImParagraphCenter/>,<ImParagraphRight/>])
    const[count, setCount] = useState(0)
    // let count = 0
    function onChange(e){
        setTitle(e.target.value)
        
    }
    useEffect(()=>{
        console.log(count)
        console.log(textAlign[count])
    }
    )
    function clickHandler(e){
        if(e==='b'){
            let state = [...active]
            state[0]=!state[0]
            setActive(state)
            console.log(state[0])
        }else if(e==='c'){
            setCount(count+1)
            if(count>=2){
                setCount(0)
            }
            
            // console.log(count)
            // console.log(textAlign[count])
        }
        else{
            console.error()
        }
    }
    return(
        <>
        {/* <h1>{title}</h1> */}
        <button className="form-btn" onClick={()=>clickHandler('b')} style={{backgroundColor: active[0]===true?'lightblue':'lightgray'}}><FaBold/></button>
        <button className="form-btn" onClick={()=>clickHandler('c')}>{icon[count]}</button>
        <h1><input style={{
            fontWeight: active[0]? 'bold':'normal',
            textAlign: textAlign[count]==='left' ? 'left' : textAlign[count]==='center' ? 'center':'right'
            // textAlign:'right'
            }} className="title" value={title} onChange={onChange}></input></h1>
        </>
    )
}

export default Title