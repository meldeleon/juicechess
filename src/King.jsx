import Piece from "./Piece.jsx";

export default class King extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
    );
  }

  isMovePossible(src, dest) {
    return Math.abs(src[0] - dest[0]) <= 1 && Math.abs(src[1] - dest[1]) <= 1;
  }
  getSrcToDestPath(src, dest) {
    return [];
  }
}
