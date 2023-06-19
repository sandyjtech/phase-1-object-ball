let gameObject = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },
      "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },
      "Brook Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
      },
      "Mason Plumlee": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5,
      },
      "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
      },
    },
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },
      "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
      },
      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
      },
      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 1,
      },
      "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 5,
        slamDunks: 5,
      },
    },
  },
};
//numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(player) {
  for (let key in gameObject.away.players) {
    if (key === player) {
      return gameObject.away.players[key].points;
    }
  }
  for (let key in gameObject.home.players) {
    if (key === player) {
      return gameObject.home.players[key].points;
    }
  }
}
//shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(player) {
  for (let key in gameObject.away.players) {
    if (key === player) {
      return gameObject.away.players[key].shoe;
    }
  }
  for (let key in gameObject.home.players) {
    if (key === player) {
      return gameObject.home.players[key].shoe;
    }
  }
}
//teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName) {
  switch (teamName) {
    case gameObject.away.teamName:
      return gameObject.away.colors;
      break;
    case gameObject.home.teamName:
      return gameObject.home.colors;
      break;
  }
}
//teamNames, that operates on the game object to return an array of the team names.
function teamNames() {
  return [gameObject.away.teamName, gameObject.home.teamName];
}
//playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
function playerNumbers(teamName) {
  let numbers = [];
  if (teamName === gameObject.away.teamName) {
    for (let player in gameObject.away.players) {
      numbers.push(gameObject.away.players[player].number);
    }
  }

  if (teamName === gameObject.home.teamName) {
    for (let player in gameObject.home.players) {
      numbers.push(gameObject.home.players[player].number);
    }
  }
  return numbers;
}
//playerStats, that takes in an argument of a player's name and returns an object of that player's stats. Check out the following example of the expected return value of the playerStats function:
function playerStats(player) {
  let playerInfo = {};
  for (let key in gameObject.away.players) {
    if (key === player) {
      playerInfo = { ...gameObject.away.players[key] };
    }
  }
  for (let key in gameObject.home.players) {
    if (key === player) {
      playerInfo = { ...gameObject.home.players[key] };
    }
  }
  return playerInfo;
}
