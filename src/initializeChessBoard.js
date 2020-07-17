import King from "./King.jsx";

export default function initializeChessBoard() {
  const squares = Array(8)
    .fill(null)
    .map(() => Array(8).fill(null));
  squares[7][4] = new King(1);
  squares[0][4] = new King(2);
  return squares;
}
