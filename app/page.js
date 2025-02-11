"use client"

import React, { useState, useEffect } from 'react';
import Envelope from "../components/Envelope.jsx";
import "./heart.css"
import { Heading1 } from 'lucide-react';
import TextAnimation from '../components/TextAnimation.jsx';

let amount = 60;

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [isYes, setIsYes] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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

  useEffect(()=>{
    setIsMounted(true);
  },[])

  if(!isMounted){
      return null;
  }
  return (
    <>
    <div onClick={openEnvelope}>
      <Envelope isOpen={isOpen} setIsYes={setIsYes} isYes={isYes}> </Envelope>
    </div>
    {(isYes && isOpen) ? Hearts : <></>}
    <TextAnimation trigger = {isYes} />

    </>
  );
}
