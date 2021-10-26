import { DbService } from "./db.service";

const STORAGE_KEY_LOGGEDIN_USER = 'loggedInUser'

const KEY = 'contcat_db'

export default {
    submit,
    login,
    logout,
    getLoggedInUser,
    getUserById
}


async function submit(user) {
    const userSaved = await DbService.post(KEY, {...user, coins: 100, moves: [] })
    return _saveLocalUser(userSaved)
}

async function login(creds) {
    const contacts = await DbService.query(KEY)
    const LoggedinUser = contacts.find(contact => contact.password === creds.password && contact.name === creds.name)
    if (!LoggedinUser) throw new Error('invalid details');
    else return _saveLocalUser(LoggedinUser)

}

async function getUserById(userId) {
    const user = await DbService.get(KEY,userId)
    return user
}

async function logout() {
    const user = sessionStorage.clear(STORAGE_KEY_LOGGEDIN_USER);
    return user
}

async function getLoggedInUser() {
    const user = await (JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) || null)
    return user
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    return user;
}