import { useEffect } from "react";
import { useState } from "react";

function Row2(){
  
  const [time,setTime]=useState(new Date());

  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setTime(new Date());
    },1000);

    return ()=>{
      clearInterval(intervalId);
    }
  },[]);

  return <>
<div class="container">
  <h6>

  This is current time: {time.toLocaleDateString()}-{time.toLocaleTimeString()}.
  </h6>
</div>

  </>
}

export default Row2