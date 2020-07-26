// CSV structure
// date, home team, away team, home team goals, away team goals, winner, referee name
// definitions for the "winner" column
// H = home team win
// A = away team win
// D = draw

const fs = require('fs');

const csvFileReader = (filename) => {
  return fs
    .readFileSync(filename, {
      encoding: 'utf-8',
    })
    .split('\n')
    .map((row) => row.split(','));
};

const getWinsByTeam = (team) => {
  let wins = 0;
  const matches = csvFileReader('football.csv');

  for (const match of matches) {
    if (match[1] === team && match[5] === 'H') {
      wins++;
    } else if (match[2] === team && match[5] === 'A') {
      wins++;
    }
  }

  return `${team} has won ${wins} games in total`;
};

const getGoalsByTeam = (team) => {
  let goals = 0;
  const matches = csvFileReader('football.csv');

  for (const match of matches) {
    if (match[1] === team) {
      goals += parseInt(match[3]);
    } else if (match[2] === team) {
      goals += parseInt(match[4]);
    }
  }

  return `${team} has score ${goals} goals in total`;
};

module.exports = {
  csvFileReader,
  getWinsByTeam,
  getGoalsByTeam,
};
