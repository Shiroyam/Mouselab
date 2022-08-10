type TTimeQuery = string | string[] | undefined;

export const parserQuery = (timeQuery: TTimeQuery): number => {
  return timeQuery === undefined ? 15 : Number(timeQuery);
};

export const checkQuery = (timeQuery: TTimeQuery): boolean => {
  switch (timeQuery) {
    case "15":
      return true;
    case "30":
      return true;
    case "60":
      return true;
    case "120":
      return true;
    default:
      return false;
  }
};
