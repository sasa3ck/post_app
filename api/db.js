import mysql from "mysql";

export const db = mysql.createConnection({
  host: "109.95.210.8",
  user: "u122769_admin",
  password: "root32661",
  database: "u122769_store_app",
  // host: "127.0.0.1",
  // user: "root",
  // password: "root",
  // database: "app_post_log",
  // u122769_
});

db.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + db.threadId);
});
