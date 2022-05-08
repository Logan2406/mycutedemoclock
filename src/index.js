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
  let somearr=[];
  
  
  useEffect(()=>
  {
      var time=setInterval(()=>
      {
          setDate(new Date().toString());
          setTimer(new Date().toLocaleTimeString());

          if(timer!=undefined && timer!="")
          {
            setArr(timer.split(":"));
            setHour(arr[0]);
            setMin(arr[1]);
            if(arr!=undefined && arr!=[])
            {
                if(arr[2]!=undefined && arr[2]!="")
                {
                    somearr = arr[2].split(" ");
                    setSec(somearr[0]);
                    setAp(somearr[1]);
                }
            }
           
            

          }

          if(date!=undefined && date!="")
          {
            setArr2(date.split(" "));
            setDay(arr2[0]);
            setDat(arr2[2]);
            setMon(arr2[1]);
            setYr(arr2[3]);
          }
         
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
                    <div className={styles.ap}><h4>{ap}</h4></div>
                </div>
                <div className={styles.datedivcon}>
                    <div className={styles.datediv}>
                        <div><h3>{day}</h3></div>
                        <div ><h3>{dat} {mon}</h3></div>
                        <div> <h3 >{yr}</h3></div>
                    </div>
                    
                </div>
                
            </div>
    </div>
  )
}
