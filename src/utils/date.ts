export const getTime = () => new Date().getTime();

export const Time = {
  get: new Date().getTime,

  milliSeconds: () => {
    const time = new Date().getTime();
    const timeInMilliSeconds = Math.floor(time / 1000);

    return timeInMilliSeconds;
  },
};
