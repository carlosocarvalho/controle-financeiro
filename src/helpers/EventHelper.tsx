export const hasOnPressDown = ({ touchBank }) => {
  const obj = touchBank.filter((i: any) => i != undefined)[0];
  return obj.startPageY < obj.currentPageY;
};
