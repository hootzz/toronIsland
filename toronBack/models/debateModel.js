// const db = require('../config/db');

// const Debate = {
//   getAll: () => {
//     return new Promise((resolve, reject) => {
//       db.query('SELECT * FROM debates', (err, results) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(results);
//         }
//       });
//     });
//   },
//   vote: (debateId, type) => {
//     return new Promise((resolve, reject) => {
//       const columnName = type === 'upvote' ? 'upvotes' : 'downvotes';
//       db.query(`UPDATE debates SET ${columnName} = ${columnName} + 1 WHERE id = ?`, [updownId], (err, results) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(results);
//         }
//       });
//     });
//   },
// };

// module.exports = Debate;