import userService from "../../services/user.service";
export default {
    state: {
        users: [],
        loggedInUser: null
    },
    getters: {
        users(state) {
            return state.users
        },
        loggedInUser({ loggedInUser }) {
            return loggedInUser
        }
    },
    mutations: {
        submit(state, { savedUser }) {
            const idx = state.users.findIndex(currUser => user._id === currUser._id);
            console.log(idx);
            if (idx === -1) state.users.push(savedUser);
            else state.users.splice(idx, 1, savedUser);
        },
        setLoggedInUser(state, { user }) {
            state.loggedInUser = user
        }
    },
    actions: {
        async submit({ commit }, { user }) {
            const savedUser = await userService.save(user)
            commit({ type: 'onSubmit', savedUser })
        },
        async loadUser({ commit }) {
            const user = userService.getLoggedInUser()
            if (user) commit({ type: 'setLoggedInUser', user })
        }
    }

};