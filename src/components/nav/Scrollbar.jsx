import  { useEffect, useState } from 'react'

function useReading() {
    const [completion , setCompletion] = useState(0)
    useEffect(()=>{
        const updateScroll = ()=>{
           const scrollProgress = window.scrollY
           const scrollHeight = document.body.scrollHeight - window.innerHeight
        
        if(scrollHeight){
            setCompletion(
                Number(( scrollProgress / scrollHeight).toFixed(2))*100
            )
        }
    }
        window.addEventListener('scroll' , updateScroll)

        return ()=>{
            window.removeEventListener('scroll', updateScroll)
        }
    },[])
  return completion;
}

export default useReading