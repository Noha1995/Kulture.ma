

const initialState = {
   isSkip: false,
   isCategorie:null,
   dataEvent:null
}

const Skip = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SKIP_STATUS': {
            return {
                ...state,
                isSkip:action.payload

            }
        }
        case 'CHANGE_Categorie_STATUS':{
            return{
                ...state,
                isCategorie:action.payload
            }
        }
        case 'DATA_EVENT':{
            return{
                ...state,
                dataEvent:action.payload
            }
        }
        default:
            return state
    }
};
export default Skip