import React, { useEffect, useState } from "react";
import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard";
import game from "./game/game";
import { FlipProvider } from "./FlipContext";


export default function MemoryGame(){

    const [gameOver, setGameOver] = useState(false);

    const [cards,setCards] = useState([]);

    useEffect(() =>{

        setCards(game.createCardsFromTechs())

    },[])

    function handleRestart(){
        game.clearCards();
        setCards(game.createCardsFromTechs())
        setGameOver(false)
    }

    function handleFlip(card){

        game.flipCard(card.id, () =>{
            setGameOver(true)
        }, ()=>{
            setCards([...game.cards])
        })
        
        setCards([...game.cards])

    }

    return(
        <div>
          <FlipProvider handleFlip={handleFlip}>
            <GameBoard cards={cards}></GameBoard>
            </FlipProvider>
            <GameOver show={gameOver} handleRestart={handleRestart}></GameOver>
        </div>
    )

}