import baseContacts from '../data/contacts.json';
import { DbService } from "./db.service";
import userService from './user.service';

export default {
    query,
    getById,
    save,
    getEmptyContact,
    remove,
    transferCoins
}



const KEY = 'contcat_db'
async function query() {
    const contactList = await DbService.query(KEY)
    if (!contactList || !contactList.length) {
        const contacts = baseContacts
        DbService.insert(KEY, contacts)
    }
    return contactList
}

async function save(user) {
    if (user._id) {
        if (userService.getLoggedInUser()._id === user._id) sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        return await DbService.put(KEY, user)
    } else {
        return await DbService.post(KEY, user)
    }
}

async function getById(contactId) {
    const contact = await DbService.get(KEY, contactId)
    return contact
}

function remove(contact) {
    return DbService.remove(KEY, contact)

}

async function transferCoins(amount, to) {
    const user = await userService.getLoggedInUser()
    console.log('user??', user);
    user.setCoins(user.getCoins() - amount)
    // user.coins -= amount
    save(user)
    const recivingUser = await userService.getUserById(to)
    recivingUser.setCoins(recivingUser.getCoins() + amount)
    // recivingUser.coins += amount
    save(recivingUser)
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: '',
        password: '',
        isAdmin: false,
    }
}