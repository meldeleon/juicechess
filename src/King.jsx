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
    // if 1-7 do nothign
    // if if multiple of 8, do not allow move + 1,  do not allow -9 move, do not allow + 9 move
    if (src % 8 === 0 ){
        return(
            src - 8 === dest ||
            src - 7 === dest ||
            src + 8 === dest ||
            src + 7 === dest ||
            src - 1 === dest
        );
  
    }
    else if (src - 1 % 8 === 0){
        return(
            
        );
    }
    
    /*return (
      src - 9 === dest ||
      src - 8 === dest ||
      src - 7 === dest ||
      src + 1 === dest ||
      src + 9 === dest ||
      src + 8 === dest ||
      src + 7 === dest ||
      src - 1 === dest
    );*/

  }
  getSrcToDestPath(src, dest) {
    return [];
  }
}




