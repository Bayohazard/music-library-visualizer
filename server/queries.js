import db from './database.js';

const TABLE_NAME = 'song_information';

export const findAll = callback => {
  const queryString = `SELECT * FROM ${TABLE_NAME};`;

  db.query('SELECT * FROM song_information', (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};
