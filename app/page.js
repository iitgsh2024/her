"use client"

import React, { useState, useEffect } from 'react';
import Envelope from "../components/Envelope.jsx";
import "./heart.css"

let amount = 40;

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [isYes, setIsYes] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const openEnvelope = () => {
      setIsOpen(true);
  };

  const showHearts = ()=>{
    return (
      <div className="for-love-hearts" suppressHydrationWarning={true}>
        {
          Array(amount).fill("heart").map((item,index) => {
            const randomNumberLeft = Math.floor(Math.random() * 101);
            const randomNumberDelay = Math.floor(Math.random() * 101);
            return (<div className="heart" key={index} style={{ "--left": randomNumberLeft + '%', "--delay": randomNumberDelay} }></div>);
          })
        }
      </div>
    );
  }

  useEffect(()=>{
    setIsMounted(true);
  },[])

  if(!isMounted){
      return null;
  }
  
  return (
    <>
    <div onClick={openEnvelope}>
      <Envelope isOpen={isOpen} setIsYes={setIsYes}> </Envelope>
    </div>
    {(isYes && isOpen) ? showHearts() : <></>}
    </>
  );
}
