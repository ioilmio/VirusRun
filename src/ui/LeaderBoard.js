
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4Xty3QGmXJkxEl3MgwnA/scores/';

export const putScore = async (user, score) => {
  const body = JSON.stringify({ user, score });
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  };
  const response = await fetch(url, data);
  const result = await response.json();
  return result;
};

export const getScores = async () => {
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(url, data);
  const scores = await response.json();
  return scores.result;
};