export const getTime: (baseTime:Date,hours:number) => Date = (baseTime,hours) => {
  let newTime: Date = new Date(baseTime); //js passes objects implicity by reference
  newTime.setHours(hours);
  newTime.setMinutes(0);
  newTime.setSeconds(0);
  newTime.setMilliseconds(0);
  return newTime;
}