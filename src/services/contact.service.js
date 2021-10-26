import baseContacts from '../data/contacts.json';
import { DbService } from "./db.service";

export default {
    query,
    getById,
    save,
    getEmptyContact,
    remove
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

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: '',
        password: '',
        isAdmin: false,
    }
}