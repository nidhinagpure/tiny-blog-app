import { useEffect, useState } from "react"

const Clock = () => {

     const [time, setTime] = useState();
      
     useEffect (() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
     }, []);

      return (
        <div>
            <h1>Clock</h1>
            <p>{time}</p>
        </div>
      )

}

export default Clock
