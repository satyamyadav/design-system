const setDate = (jumpDateIndex: number) => {
  const d = new Date();
  return d.setDate(d.getDate() + jumpDateIndex);
};

export const getTomorrowDate = () => {
  return setDate(1);
};

export const get3DaysLaterDate = () => {
  return setDate(3);
};

export const get1WeekLaterDate = () => {
  return setDate(7);
};

export const get30DaysLaterDate = () => {
  return setDate(30);
};
