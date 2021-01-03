import React,{useEffect, useState} from 'react'
import isOdd from 'is-odd'
import './RandomColor.css'

function RandomColor() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevCount)=>prevCount+=1)
        },1000)
        return ()=>clearInterval(interval)
    },[count])
    // count%2===0 you can use this instead of isOdd
    return (
        <div>
            <div className={ isOdd(count)===true ? 'redcss' : 'greencss'}>ABDUR RAKIB RONY</div>
            <h1>count:{count}</h1>
        </div>
    )
}

export default RandomColor
