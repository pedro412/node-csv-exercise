const { csvFileReader, getWinsByTeam, getGoalsByTeam } = require('../index');

describe('CSV File Reader', () => {
  test('csvFileReader returns a valid array', () => {
    expect(csvFileReader('football.csv')).toBeTruthy();
  });

  test('csvFileReader should return an array containing the data of the corresponding file', () => {
    const data = csvFileReader('football.csv');
    expect(data[0]).toEqual(
      expect.arrayContaining([
        '10/08/2018',
        'Man United',
        'Leicester',
        '2',
        '1',
        'H',
        'A Marriner',
      ])
    );
  });

  test('getWinsByTeam should return the correct answer for Man United', () => {
    const team = 'Man United';
    const expected = `${team} has won 18 games in total`;
    expect(getWinsByTeam(team)).toBe(expected);
  });

  test('getWinsByTeam should return the correct answer for Wolves', () => {
    const team = 'Wolves';
    const expected = `${team} has won 13 games in total`;
    expect(getWinsByTeam(team)).toBe(expected);
  });

  test('getGoalsByTeam should return the correct answer for Man United', () => {
    const team = 'Man United';
    expect(getGoalsByTeam(team)).toBe(`${team} has score 61 goals in total`);
  });

  test('getGoalsByTeam should return the correct answer for Wolves', () => {
    const team = 'Wolves';
    expect(getGoalsByTeam(team)).toBe(`${team} has score 40 goals in total`);
  });
});
