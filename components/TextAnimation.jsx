import React, { useState, useEffect } from "react";
import "./TextAnimation.css";

const paragraphs = [
    "I always knew you loved me 😏",
    "But I'll always love you more, forever",
    "So here is something I made to show you my love",
];

const TextAnimation = (props) => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        console.log(props.trigger);
        if(!props.trigger){
            setIndex(0);
        }
        else{
            const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1));
            }, 4000);
            if(index>=2){
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        }
    }, [props.trigger]);

    return (
        <div className="text-container">
            {props.trigger ? <p key={index} className="fade-text">{paragraphs[index]}</p> : ""}
        </div>
    );
};

export default TextAnimation;
