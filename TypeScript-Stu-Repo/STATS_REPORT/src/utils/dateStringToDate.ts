export const dateStringToDate = (dateString: string): Date => {
  // 2020/01/15 i.e
  const dateParts = dateString.split("/").map((item: string): number => {
    return parseInt(item);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
