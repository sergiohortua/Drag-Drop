import React from "react";
import Card from "./Card";
import Board from "./Board";
import '../style/ClassBoard.css'

export default function ClassBoard(props) {
  return (
    <div className="container">
      <Board id="board-1" className="board">
        <Card id="card-1" className="card" draggable="true">
          <p>Card 1111 provider</p>
        </Card>
      </Board>
      <Board id="board-2" className="board">
        <Card id="card-2" className="card" draggable="true">
          <p>Card 2222 provider</p>
        </Card>
      </Board>
    </div>
  );
}

