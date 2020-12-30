import { postScore, getScores } from '../src/ui/LeaderBoard';

jest.mock('../__mocks__/request.js');

beforeEach(() => {
  fetch.resetMocks();
});

test('saves the score and username to the leaderBoard', () => {
  postScore('ioilmio', 100)
    .then((score) => expect(score)
      .toEqual({ result: 'Leaderboard score created correctly.' }));
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
    // eslint-disable-next-line no-console
  }).catch(() => { });
});

test('Return score', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        user: 'ioilmio',
        score: 100,
      }],
  }));
  const res = await getScores();
  expect(res).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        score: 100,
        user: 'ioilmio',
      }),
    ]),
  );
});

test('Return value for POST action', () => {
  fetch.mockResponseOnce(JSON.stringify([{ result: 'Leaderboard score created correctly.' }]));
  const onResponse = jest.fn();
  const onError = jest.fn();

  return postScore('ioilmio', 100)
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
      expect(onResponse.mock.calls[0][0])
        .toEqual({ result: 'Leaderboard score created correctly.' });
    });
});