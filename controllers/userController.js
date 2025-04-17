const { body, validationResult, matchedData } = require('express-validator');
const db = require('../db/queries');

async function getUsernames(req, res) {
	const usernames = await db.getAllUsernames();
	console.log('Usernames: ', usernames);
	// res.send('Usernames: ' + usernames.map((user) => user.username).join(', '));
	res.render('index', { title: 'All Users', allUsers: usernames });
};

async function createUsernameGet(req, res) {
	res.render('new', { title: 'New User Form' });
};

async function createUsernamePost(req, res) {
	const { username } = req.body;
	await db.insertUsername(username);
	res.redirect('/');
};

async function usersSearch (req, res) {
    const matchedUsers = await db.searchUsername(req.query.usernameSearch);
    res.render('search', { title: 'Search Results', matchedUsers: matchedUsers });
};

async function deleteAllUsers (req, res) {
    await db.deleteAllUsers();
    res.render('index', { title: 'All Users', allUsers: [] });
}

module.exports = {
	getUsernames,
	createUsernameGet,
	createUsernamePost,
    usersSearch,
    deleteAllUsers
};