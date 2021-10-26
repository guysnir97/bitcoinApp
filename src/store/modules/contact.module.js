import userService from "../../services/user.service";
import contactService from "../../services/contact.service";
export default {
    state: {
        contacts: []
    },
    getters: {
        contacts(state) {
            return state.contacts
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        saveContact(state, { savedContact }) {
            const idx = state.contacts.findIndex(contact => contact._id === savedContact._id)
            if (idx === -1) state.contacts.unshift(savedContact)
            else state.contacts.splice(idx, 1, savedContact)
        }
    },

    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.query()
            commit({ type: 'setContacts', contacts })
        },

        async saveContact({ commit }, { contact }) {
            const savedContact = await contactService.save(contact)
            commit({ type: 'saveContact', savedContact })
        },

        async transfer(commit, { amount, to }) {
        debugger
            await contactService.transferCoins(amount, to)
            const loggedInUser = userService.getLoggedInUser()
            commit({ type: 'saveContact', savedContact: loggedInUser })
            const recivingUser = userService.getUserById(to)
            commit({ type: 'saveContact', savedContact: recivingUser })
        }

    }

};