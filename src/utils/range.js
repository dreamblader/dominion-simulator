import { Directions } from "models/enums";

export const isInRange = (
  originPlace,
  targetPlace,
  direction,
  range = 0,
  flipped = false
) => {
  const flipFactor = flipped ? -1 : 1;

  const checkRangeY = (start, end) => {
    const rangeMax = originPlace.y + Math.max(start, end);
    const rangeMin = originPlace.y + Math.min(start, end);
    return rangeMin >= targetPlace.y && rangeMax <= targetPlace.y;
  };

  const checkRangeX = (start, end) => {
    const rangeMax = originPlace.x + Math.max(start, end);
    const rangeMin = originPlace.x + Math.min(start, end);
    return rangeMin >= targetPlace.x && rangeMax <= targetPlace.x;
  };

  const getRealVec = (num) => {
    return num * flipFactor;
  };

  const [forward, down] = Array(2).fill(1);
  const [back, up] = Array(2).fill(-1);

  switch (direction) {
    case Directions.NORTH:
      return (
        checkRangeY(getRealVec(up), getRealVec(up - range)) && checkRangeX(0, 0)
      );
    case Directions.NORTH_EAST:
      return (
        checkRangeY(getRealVec(up), getRealVec(up - range)) &&
        checkRangeX(getRealVec(forward), getRealVec(forward + range))
      );
    case Directions.EAST:
      return (
        checkRangeY(0, 0) &&
        checkRangeX(getRealVec(forward), getRealVec(forward + range))
      );
    case Directions.SOUTH_EAST:
      return (
        checkRangeY(getRealVec(down), getRealVec(down + range)) &&
        checkRangeX(getRealVec(forward), getRealVec(forward + range))
      );
    case Directions.SOUTH:
      return (
        checkRangeY(getRealVec(down), getRealVec(down + range)) &&
        checkRangeX(0, 0)
      );
    case Directions.SOUTH_WEST:
      return (
        checkRangeY(getRealVec(down), getRealVec(down + range)) &&
        checkRangeX(getRealVec(back), getRealVec(back - range))
      );
    case Directions.WEST:
      return (
        checkRangeY(0, 0) &&
        checkRangeX(getRealVec(back), getRealVec(back - range))
      );
    case Directions.NORTH_WEST:
      return (
        checkRangeY(getRealVec(up), getRealVec(up - range)) &&
        checkRangeX(getRealVec(back), getRealVec(back - range))
      );
  }
};
