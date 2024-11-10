import sqlite3 from "sqlite3";

/**
 * dumb migration of a users table
 */
export async function migrateUsers() {
  const db = new sqlite3.Database("test.db");

  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS users (
                id INTEGERER PRIMARY KEY,
                name TEXT NOT NULL
            )`
    );
  } catch (error) {
    console.log(`Error in migration of users`, error);
    throw error;
  } finally {
    db.close();
  }
}

/**
 *
 * @param {sqlite3 db connection} db
 * @param {SQL Query} sql
 * @returns Promise that resolves if the query was sucessfull
 */
async function execute(db, sql) {
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => {
      if (err) reject(err);

      resolve();
    });
  });
}
