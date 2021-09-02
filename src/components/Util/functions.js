
export function reducer(state, action) {
    switch (action.type) {
        case 'login':
            if (!state.hasAccount) {
                throw new Error("Don't have an account");
            }
            return {
                ...state,
                username: action.value.username,
                password: action.value.password
            };
        default:
            throw new Error("Not an action");
    }
}