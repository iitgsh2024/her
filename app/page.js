"use client"

import React, { useState, useEffect } from 'react';
import Envelope from "../components/Envelope.jsx";
import "./heart.css"
import { Heading1 } from 'lucide-react';

let amount = 60;

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [isYes, setIsYes] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showLast, setShowLast] = useState(0);

  const openEnvelope = () => {
      setIsOpen(true);
  };

  const Hearts = 
    (
      <div className="for-love-hearts">
        {
          Array(amount).fill("heart").map((item,index) => {
            const randomNumberLeft = Math.floor(Math.random() * 101);
            const randomNumberDelay = Math.floor(Math.random() * 101);
            return (<div className="heart" key={index} style={{ "--left": randomNumberLeft + '%', "--delay": randomNumberDelay} }></div>);
          })
        }
      </div>
  );

  const lastMessage = (
    <h1 className="bg-red-200">I always knew you still loved me 😏</h1>
  );

  useEffect(()=>{
    setIsMounted(true);
  },[])

  useEffect(()=>{
    const interval = setInterval(() => {
      setShowLast(prev=>prev+1);
      clearInterval(interval);
    }, 2000);
  },[isYes&isOpen])

  useEffect(()=>{
    console.log(showLast);
  },[showLast]);

  if(!isMounted){
      return null;
  }
  return (
    <>
    <div onClick={openEnvelope}>
      <Envelope isOpen={isOpen} setIsYes={setIsYes} isYes={isYes}> </Envelope>
    </div>
    {(isYes && isOpen) ? Hearts : <></>}
    {(showLast>1) ? lastMessage : <></>}

    </>
  );
}
