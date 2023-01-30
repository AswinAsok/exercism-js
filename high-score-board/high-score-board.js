export function createScoreBoard()
  {
    const highscore = {
      "The Best Ever": 1000000
    }

    return(highscore);
  }

export function addPlayer(existingScoreBoard, name, score)
  {
    existingScoreBoard[name] = score;

    return(existingScoreBoard);
  }

export function removePlayer(existingScoreBoard, name)
  {
    delete existingScoreBoard[name];

    return(existingScoreBoard);
  }

export function updateScore(existingScoreBoard, name, newScore)
  {
    existingScoreBoard[name]+=newScore;

    return(existingScoreBoard);
  }

export function applyMondayBonus(scoreBoard)
{
  for(let name in scoreBoard)
    {
      scoreBoard[name] += 100;
    }

  return(scoreBoard);
}

export function normalizeScore(params)
  {
    return(params.normalizeFunction(params.score))
  }