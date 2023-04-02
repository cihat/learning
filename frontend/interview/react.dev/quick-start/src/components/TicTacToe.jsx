import React from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className='board'>
      <div className="status">{status}
        <PreviewBoard squares={squares} handleClick={handleClick} isPreview={false} />
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setHistory(history.slice(0, nextMove + 1));
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `'Go to move #' ${move}`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
        <PreviewBoard squares={squares} />
        <hr />
        <br />
      </li>

    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info preview_container">
        <ol className='grid_item'>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function PreviewBoard({ squares, handleClick, isPreview = true }) {
  return (
    <>
      {
        Array(3).fill(null).map((_, i) => {
          const row = Array(3).fill(null).map((_, j) => {
            if (!isPreview) return <Square value={squares[i * 3 + j]} onSquareClick={() => handleClick(i * 3 + j)} />
            return <Square value={squares[i * 3 + j]} />
          })
          return <div className="board-row">{row}</div>
        })
      }
    </>
  );
} 