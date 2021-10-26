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
    },
    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.query()
            commit({ type: 'setContacts', contacts })
            console.log(this.state);
        },
        async saveContcat({ commit }, { contact })
        // const contact = await contactService.save() 


    }

};