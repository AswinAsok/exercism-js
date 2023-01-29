export function totalBirdCount(birdsPerDay)
  {
    let count = 0;
    for(let i = 0; i< birdsPerDay.length; i++)
      {
        count+=(birdsPerDay[i]);
      }
    return(count);
  }

export function birdsInWeek(birdsPerDay, weekNumber)
{

  let week = [0,7];
  week[0] = (weekNumber-1) * 7;
  week[1] = (week[1] * weekNumber)-1;
  
  let count = 0;
  for(let i = week[0]; i<=week[1]; i++)
    {
      count += birdsPerDay[i];
    }

  return(count);
}

export function fixBirdCountLog(birdsPerDay)
  {
    birdsPerDay[0]+=1;

    for(let i = 1; i<birdsPerDay.length;i++)
      {
        if(i%2==0)
        {
          birdsPerDay[i]+=1;          
        }
      }

    return(birdsPerDay);
  }