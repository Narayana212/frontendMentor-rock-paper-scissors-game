import "./App.css";
import Header from "./components/Header";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./components/ui/dialog";

const imagesArray = [
  {
    id: 1,
    type: "rock",
    url: "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png",
  },
  {
    id: 2,
    type: "paper",
    url: "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png",
  },
  {
    id: 3,
    type: "scissor",
    url: "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png",
  },
];

function App() {
  const [score, setScore] = useState<number>(0);
  const [open,setOpen]=useState<boolean>(false)
  const [winner,setWinner]=useState<string>("")
  const [id,setId]=useState<number>(0)
  const [houseId,setHouseId]=useState<number>(0)


  function checkScore(id: number) {
    setOpen(true)
    setId(id)
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 3) + 1;
    setHouseId(randomNumber)

    if (id === randomNumber) {
      setWinner("IT'S A TIE")
    } else if (
      (id === 1 && randomNumber === 3) ||
      (id === 2 && randomNumber === 1) ||
      (id === 3 && randomNumber === 2)
    ) {
      
      setScore(score + 1);
      setWinner("YOU WON")
    } else {
     
      setScore(score - 1);
      setWinner("YOU LOST")
    }
  }
  return (
    <div className="w-full flex flex-col items-center justify-center lg:px-20 ">
      <Header score={score} />
      {open?(
        <div className="flex mt-5 gap-5 items-center">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-white text-sm    lg:text-3xl">You Picked</h1>
          <img src={imagesArray[id-1].url} alt="playerChoice" className="w-52"/>
          </div>
          <div className="flex flex-col justify-center gap-5">
          <h1 className="text-sm    lg:text-3xl text-white ">{winner}</h1>
          <button className="bg-white rounded-md py-2" style={{ color: "hsl(214, 47%, 23%) " }} onClick={()=>setOpen(false)}>PLAY AGAIN</button>
          </div>
          <div className="flex flex-col items-center gap-5">
          <h1 className="text-white text-sm    lg:text-3xl">House Picked</h1>
          <img src={imagesArray[houseId-1].url} alt="houseChoice" className="w-52"/>
          </div>
        </div>
      ):(
        <div className="flex items-center mt-5 justify-center flex-wrap max-w-[40%]   ">
        {imagesArray.map((a) => (
          <div
            className="cursor-pointer active:scale-95 transition-all"
            onClick={() => checkScore(a.id)}
            key={a.id}
          >
            <img src={a.url} alt={a.type} className="w-52" />
          </div>
        ))}
      </div>
      )}

      <Dialog>
        <DialogTrigger className="text-white uppercase border-white border px-3 py-1 rounded-md  lg:self-end">
          Rules
        </DialogTrigger>
        <DialogContent >
          <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" className="w-[28rem]" alt="rules"/>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
