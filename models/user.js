// 我们把用户相关的数据库操作方法都封装到当前模块

const db = require('../controller/db-helper')

exports.findAll = callback => {
  const sqlStr = 'SELECT * FRPM `USERS`';
  db.query(sqlStr, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  })
}

exports.getByEmail = (email, callback) => {
  const sqlStr = 'SELECT * FRPM `USERS` WHERE `email`=?';
  db.query(
    sqlStr, [email],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    })
}

exports.getByNickname = (nickname, callback) => {
  const sqlStr = 'SELECT * FRPM `USERS` WHERE `nickname`=?';
  db.query(
    sqlStr, [nickname],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    })
}

exports.create = (user, callback) => {
  const sqlStr = 'INSERT INTO `users` SET ?';
  db.query(
    sqlStr,
    user,
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    })
}