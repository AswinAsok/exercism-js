const knightIsAwake = true;
export function canExecuteFastAttack(knightIsAwake)
{
  if(knightIsAwake)
  {
    return false;
  }
  return true;
}

const archerIsAwake = true;
const prisonerIsAwake = false;
export function canSpy(knightIsAwake, archerIsAwake,  prisonerIsAwake)
{
  if(knightIsAwake || archerIsAwake ||prisonerIsAwake)
  {
    return true;
  }
  return false;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake)
{
  if(prisonerIsAwake && !archerIsAwake)
  {
    return true;
  }
  else
    return false;
}



export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)
{
  if(petDogIsPresent && !archerIsAwake)
  {
    return true;
  }

  if(prisonerIsAwake && !knightIsAwake && !archerIsAwake)
  {
    return true;
  }

  return false;
}