import userService from "../../services/user.service";
import contactService from "../../services/contact.service";
export default {
    state: {
        loggedInUser: null
    },
    getters: {
        loggedInUser({ loggedInUser }) {
            return loggedInUser
        }
    },
    mutations: {
        setLoggedInUser(state, { loggedUser }) {
            state.loggedInUser = loggedUser
        },

    },

    actions: {
        async signup({ commit }, { user }) {
            const loggedUser = await userService.submit(user)
            commit({ type: 'setLoggedInUser', loggedUser })
        },
        async login({ commit }, { user }) {
            const loggedUser = await userService.login(user)
            commit({ type: 'setLoggedInUser', loggedUser })
        },
        async logout({ commit }) {
            await userService.logout()
            commit({ type: 'setLoggedInUser', user: null })
        },
        async loadUser({ commit }, { loggedUser }) {
            commit({ type: 'setLoggedInUser', loggedUser })
        },
        

    }

};
// submit(state, { savedUser }) {
//     const idx = state.users.findIndex(currUser => user._id === currUser._id);
//     console.log(idx);
//     if (idx === -1) state.users.push(savedUser);
//     else state.users.splice(idx, 1, savedUser);