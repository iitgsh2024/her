import Image from "next/image";
import "./heart.css"

let amount = 40;

export default function Home() {
  return (
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
}
