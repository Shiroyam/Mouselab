type TTimeQuery = string | string[] | undefined;

export const checkQuery = (timeQuery: TTimeQuery): number => {
  return timeQuery === undefined ? 15 : Number(timeQuery);
};
