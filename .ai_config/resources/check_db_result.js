const mysql = require('mysql2/promise');
async function check() {
  const connection = await mysql.createConnection({
    host: '34.22.98.158',
    user: 'root',
    password: 'tkdlektkfkd12!',
    database: 'antigravity_edu',
    port: 3306
  });
  try {
    const [rows] = await connection.execute('SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 5');
    console.log(JSON.stringify(rows, null, 2));
  } catch (error) {
    console.error('DB Check Error:', error.message);
  } finally {
    await connection.end();
  }
}
check();
