

const initialState = {
    LanguageApp: "ar",
}

const Language = (state = initialState, action) => {
    switch (action.type) {
        case 'LANGUAGE_OFF_APP': {
            return {
                ...state,
                LanguageApp: action.payload
            }
        }
        default:
            return state
    }
};
export default Language