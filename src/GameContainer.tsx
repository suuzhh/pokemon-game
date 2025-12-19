import { useEffect } from 'react';
import { StartGame } from './game'

export function GameContainer() {
  useEffect(() => {
    const game = StartGame('game');
    return () => {
      game.destroy(true);
    }
  }, []);


  return (
    <div id="game">
      <h1>hello world </h1>
    </div>
  )
}