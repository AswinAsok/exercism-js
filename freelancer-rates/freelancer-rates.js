export function dayRate(hourlyRate) 
{
  return(8*hourlyRate);
}

export function daysInBudget(fixedBudget, hourlyRate)
{
  return(Math.floor(fixedBudget/dayRate(hourlyRate)));
}

export function priceWithMonthlyDiscount(hourlyRate,totalNumberOfDays, discount)
{
  let months = Math.floor(totalNumberOfDays/22);

  discount = (1-discount); 
  let exceedingDays = (totalNumberOfDays%22);
  console.log(exceedingDays);

  return Math.ceil(months * 22 * (discount*dayRate(hourlyRate)) + exceedingDays * dayRate(hourlyRate));
}