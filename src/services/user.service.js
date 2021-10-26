import { DbService } from "./db.service";
const KEY = 'user_db'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedInUser'

export default {
    getUser,
    save,
    login,
    logout,
    getLoggedInUser
}

function getUser() {
    const loggedInUser = {
        name: 'Puki',
        coins: 100,
        moves: []
    }
    return loggedInUser
}

async function save(user) {
    let userSaved;
    if (user._id) {
        userSaved = await DbService.put(KEY, user)
    } else {
        userSaved = await DbService.post(KEY, {...user, coins: 100, moves: [] })
    }
    return _saveLocalUser(userSaved)
}

function login(creds) {

}

function logout(params) {

}

function getLoggedInUser() {
    const user = (sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || null)
    return user


}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    return user;
}