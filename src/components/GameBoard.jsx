export default function GameBoard({ onPlayerSelect, board }) {
  // const [gameBoard, setGameBoard] = useState(initGameBoard);

  // function handleGameBoardClick(rIndex, cIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map((innerArr) => [...innerArr])];
  //     updatedBoard[rIndex][cIndex] = playerSymbol;
  //     return updatedBoard;
  //   });

  //   onPlayerSelect();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rIndex) => (
        <li key={rIndex}>
          <ol>
            {row.map((playerSymbol, cIndex) => (
              <li key={cIndex}>
                <button
                  onClick={() => onPlayerSelect(rIndex, cIndex)}
                  disabled={playerSymbol}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
