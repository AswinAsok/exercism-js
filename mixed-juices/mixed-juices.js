export function timeToMixJuice(name)
  {
    switch(name)
      {
        case 'Pure Strawberry Joy':
          return (0.5);
        case 'Energizer':
          return (1.5);
        case 'Green Garden':
          return (1.5);
        case 'Tropical Island':
          return (3);
        case 'All or Nothing':
          return (5);
        default:
          return (2.5);
      }
  }


export function limesToCut(numberOfLinmeWedges, limeSupply)
  {
    let count = 0;
    let i = 0;
    while(count < numberOfLinmeWedges && i < limeSupply.length)
      {
        if(limeSupply[i] === "small")
          count+=6;
        else if(limeSupply[i] === "medium")
          count+=8;
        else
          count+=10;
        
       i++;      
      }
    return i;
  }

export function remainingOrders(numberOfMinutesLeft, arrayOfJuices)
  {
    let index = 0;
    let totalMinutes = 0;
    while(totalMinutes < numberOfMinutesLeft && index<arrayOfJuices.length)
      {
        totalMinutes = totalMinutes + timeToMixJuice(arrayOfJuices[index]);
        console.log(totalMinutes);
        arrayOfJuices.shift()
      }
    
    
    return(arrayOfJuices);
    
    //return array that Li Mei cannot prepare
  }