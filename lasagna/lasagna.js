export const EXPECTED_MINUTES_IN_OVEN = 40;

export function  remainingMinutesInOven(actualTime)
  {
    return(EXPECTED_MINUTES_IN_OVEN - actualTime);
  }

export function  preparationTimeInMinutes(numberOfLayers)
  {
    return(numberOfLayers*2);
  }

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven)
  {
    return((numberOfLayers*2)+actualMinutesInOven);
  }