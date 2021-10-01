export const getPageNumber = ({ next, prev }) => {
  if (next === null && prev === null) return 1;
  if (next !== 0 && next !== null) return next - 1;
  if (prev !== null) return prev + 1;
};
