import React from 'react'
import {useState,useEffect} from 'react';
import styles from './styles.module.css'

export const MyCuteClock = () => {

  const [timer,setTimer]  = useState("");
  const [hour,setHour] = useState("");
  const [min,setMin] = useState("");
  const [sec,setSec] = useState("");
  const [ap,setAp] = useState("");
  const [arr,setArr] = useState([]);


  const [date,setDate] = useState("");
  const [day,setDay] = useState("");
  const [dat,setDat] = useState("");
  const [mon,setMon] = useState("");
  const [yr,setYr] = useState("");
  const [arr2,setArr2] = useState([]);
  
  
  useEffect(()=>
  {
      var time=setInterval(()=>
      {
          setDate(new Date().toString());
          setTimer(new Date().toLocaleTimeString());
          setArr(timer.split(":"));
          setArr2(date.split(" "));
          setHour(arr[0]);
          setMin(arr[1]);
          setSec(arr[2].split(" ")[0]);
          setAp(arr[2].split(" ")[1]);

          setDay(arr2[0]);
          setDat(arr2[2]);
          setMon(arr2[1]);
          setYr(arr2[3]);
          console.log(arr);
      },1000)
      
      return () => clearInterval(time);
  });

  return(
    
 <div>
            <div className={styles.maindiv}>
                <div className={styles.timediv}>
                    <div className={styles.hour}><h4>{hour}</h4></div>
                    <div className={styles.sep}><h4>{":"}</h4></div>
                    <div className={styles.min}><h4>{min}</h4></div>
                    <div className={styles.sep}><h4>{":"}</h4></div>
                    <div className={styles.sec}><h4>{sec}</h4></div>
                    <div>
                        
                        <div className={styles.datediv}>
                            <div>
                                <h3 >{day}</h3>
                            </div>
                            <div >
                                <h3>{dat} {mon}</h3>
                            </div>
                            <div> 
                                <h3 >{yr}</h3>
                            </div>
                       </div>
                       <div className={styles.ap}><h4>{ap}</h4></div>
                       
                        
                    </div>
                    


                        
                        
                      
                   
                </div>
            </div>
        </div>
  )
}
