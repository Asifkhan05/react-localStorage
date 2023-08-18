const { useState, useEffect } = require("react");

function useWindowSize() {

let [size,reSize]=useState({
    width:undefined,
    height:undefined
})

useEffect(()=>{
    let hand = ()=>{
        reSize({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }
    hand()
    window.addEventListener("resize",hand)
    return ()=> window.removeEventListener("resize",hand)
},[])
return size
}

export default useWindowSize