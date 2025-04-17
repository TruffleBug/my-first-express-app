const pool = require("./pool");

async function getAllUsernames() {
	const { rows } = await pool.query('SELECT * FROM usernames');
	return rows;
}

async function insertUsername(username) {
	await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

async function searchUsername(input) {
	const { rows } = await pool.query(`SELECT username FROM usernames WHERE UPPER(username) LIKE UPPER('%${input}%');`)
	console.log('input: ', input, ', matchedUsers: ', rows)
	return rows;
}

async function deleteAllUsers() {
	await pool.query('DELETE FROM usernames');
	return;
}

module.exports = {
	getAllUsernames,
	insertUsername,
	searchUsername,
	deleteAllUsers
};