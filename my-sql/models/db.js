import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
});

export async function addUser(username, email) {
  try {
    await db.query('INSERT INTO tenant (username, email) VALUES (?, ?)', [username, email]);
    console.log('User added to the database successfully.');
    return true;
  } catch (error) {
    console.error('Error adding user to the database:', error);
    return false;
  } finally {
    db.end();
  }
}
