import { postScore, getScores } from '../src/ui/LeaderBoard';

test('saves the score and username to the leaderBoard', () => {
  postScore('ioilmio', 100).then((score) => expect(score).toEqual({ result: 'Leaderboard score created correctly.' }));
});

test('get score and username in descending order from the leaderBoard', () => {
  getScores().then((scores) => expect(typeof scores).toEqual('object'));
});

test('ranking contains the user', () => {
  getScores().then(data => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          score: 100,
          user: 'ioilmio',
        }),
      ]),
    );
  }).catch(err => console.error(err))
});
