import {Tangerine} from 'next/font/google';
import { useState, useEffect } from 'react';
import "./Envelope.css";
import { Button } from './ui/button.jsx';

const tangerine = Tangerine({
    subsets:['latin'],
    weight : "700",
});

const EnvelopeReveal = (props) => {

    const [animate, setAnimate] = useState(false);
    const [yesButtonsList, setYesButtonsList] = useState(Array(0));
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 800);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    const yay = ()=>{
        if(props.isOpen) props.setIsYes(true);
    }

    const generateYesButtons = ()=>{
        if(!props.isOpen) return;
        const randomTop = Math.floor(Math.random() * 101);
        const randomLeft = Math.floor(Math.random() * 101);
        let temp = yesButtonsList;
        temp.push(
        <div key={yesButtonsList.length+1} style={{position: "absolute", top: `${randomTop}%`, left: `${randomLeft}%` }} onClick={yay}>
            <Button className="bg-red-400 active:bg-pink-300 text-lg hover:bg-red-400">Yes</Button>
        </div>
        );
        setYesButtonsList(temp);
    }

    return (
        <div className={"wrapper " +  (animate && !props.isOpen ? "wobble-hor-bottom" : "")}>
            <div className={`container ${props.isOpen ? "open" : ""} ${props.isYes ? "accept" : ""}`}>
                <div className="envelope">
                    <div className="flap"></div>
                </div>
                <div className="message">
                    <p>Will you be my valentine?</p>
                    <div className="options">
                        <div className="yes" onClick={yay}>
                            <Button className="bg-red-400 active:bg-pink-300 text-lg hover:bg-red-400">Yes</Button>
                        </div>
                        <div className="no" onClick={generateYesButtons}>
                            <Button className="bg-red-400 active:bg-pink-300 text-lg hover:bg-red-400">No</Button>
                        </div>
                    </div>
                    {yesButtonsList.map((button)=>{
                        return button;
                    })}
                </div>
            </div>
        </div>
    );
};

export default EnvelopeReveal;
