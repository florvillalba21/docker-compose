import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'mypassword',
  port: 3306,
  database: 'test',
});

connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos:", error);
  } else {
    console.log("Conexión exitosa a la base de datos MariaDB");
  }
});
