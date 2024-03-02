"use client"

import { useState, useEffect } from 'react';
import { Card } from "@/components/Card";
import { Title } from "@/components/Title";
import { HitButton } from "@/components/HitButton";
import { StandButton } from "@/components/StandButton";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import Lottie from 'react-lottie';
import fireworks from '../fireworks.json';

export default function Home() {

  const [cpuTotal, setCpuTotal] = useState(0);
  const [playerTotal, setPlayerTotal] = useState(0);

  const [cardValueCPU, setCardValueCPU] = useState(0)
  const [cardSymbolCPU, setCardSymbolCPU] = useState("")

  const [cardValuePlayer, setCardValuePlayer] = useState(0)
  const [cardSymbolPlayer, setCardSymbolPlayer] = useState("")

  const [symbols] = useState(["♣", "♦", "♥", "♠"]);
  const [cardValues] = useState([2, 3, 4, 5, 6, 7, 8, 9, 10,]);

  const [isPlaying, setIsPlaying] = useState(false);

  const startAnimation = () => {
    setIsPlaying(true);
  };

  const stopAnimation = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const checkWinner = () => {
      if (playerTotal > 21) {
        alert("CPU wins! Player busts.");
        setPlayerTotal(0)
        setCpuTotal(0)
        console.log(cardValueCPU)
      } else if (cpuTotal > 21) {
        alert("Player wins! CPU busts.");
        setPlayerTotal(0)
        setCpuTotal(0)
        startAnimation()
        const timeoutId = setTimeout(() => {
          stopAnimation();
          }, 1000); // Stop animation after 1 second
        clearTimeout(timeoutId);
      } else if (playerTotal === 21 && cpuTotal === 21) {
        alert("It's a draw! Both player and CPU have Blackjack.");
        setPlayerTotal(0)
        setCpuTotal(0)
      } else if (playerTotal === 21) {
        alert("Player wins with Blackjack!");
        setPlayerTotal(0)
        setCpuTotal(0)
      } else if (cpuTotal === 21) {
        alert("CPU wins with Blackjack!");
        setPlayerTotal(0)
        setCpuTotal(0)
      }
    }
    checkWinner();

    }, [playerTotal, cpuTotal]); // Dependencies array


  const hit = () => {
    // Random symbol and card value for CPU
    const randomSymbolCPU = symbols[Math.floor(Math.random() * symbols.length)];
    const randomCardValueCPU = cardValues[Math.floor(Math.random() * cardValues.length)];

    // Random symbol and card value for PLAYER
    const randomSymbolPlayer = symbols[Math.floor(Math.random() * symbols.length)];
    const randomCardValuePlayer = cardValues[Math.floor(Math.random() * cardValues.length)];

    // Update total value of CPU and PLAYER
    setCpuTotal(prevTotal => prevTotal + randomCardValueCPU);
    setPlayerTotal(prevTotal => prevTotal + randomCardValuePlayer);

    setCardValueCPU(randomCardValueCPU);
    setCardValuePlayer(randomCardValuePlayer);

    setCardSymbolCPU(randomSymbolCPU);
    setCardSymbolPlayer(randomSymbolPlayer);

  }

  const stand = () => {

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomSymbolCPU = symbols[Math.floor(Math.random() * symbols.length)];
    const randomCardValueCPU = cardValues[Math.floor(Math.random() * cardValues.length)];

    if(randomNumber > 50 ){
      return
    } else if(randomNumber < 50){
      setCpuTotal(prevTotal => prevTotal + randomCardValueCPU);
      setCardValueCPU(randomCardValueCPU);
      setCardSymbolCPU(randomSymbolCPU);
    }

  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: fireworks,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };




  return (
    <main className="h-screen bg-[#141414]">
      <Title />
      <Card cardvalue={cardValueCPU} symbol={cardSymbolCPU} player={"CPU"} totalvalue={cpuTotal} />
      <Card cardvalue={cardValuePlayer} symbol={cardSymbolPlayer} player={"PLAYER"} totalvalue={playerTotal} />
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
      <HitButton hit={hit} />
      <StandButton stand={stand}/>
    </main>
    );
}
