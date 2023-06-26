import { createConnection } from 'mysql';

var con = createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword",
  database:"test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});