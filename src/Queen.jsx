import Pieve from "./Piece.jsx";
import Piece from "./Piece.jsx";

export default class Queen extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
    );
  }
  isMovePossible(src, dest) {
    let mod = src % 8; // 4
    let diff = 8 - mod; // 4

    return (
      Math.abs(src - dest) % 9 === 0 ||
      Math.abs(src - dest) % 7 === 0 ||
      Math.abs(src - dest) % 8 === 0 ||
      (dest >= src - mod && dest < src + diff)
    );
  }
}
