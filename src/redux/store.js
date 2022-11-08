import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools} from "redux-devtools-extension";

const addContact = "contacts/addContact"

const enchancer = composeWithDevTools(applyMiddleware());

const phoneBookInitialState = {
    contacts: [],
    filter: ""
};

export const store = createStore(phoneBookReducer, phoneBookInitialState, enchancer);




function phoneBookReducer(state=phoneBookInitialState, action) {
    switch(action.type) {
        case addContact:
            return { ...state, contacts: [...state.contacts, action.payload]}
            default:
                return state
    }

}



// export const addContactAction = {
//     type: addContact,
//     payload: {
//         name: "Evgeniy",
//         number: "066"

//     }
// }

export const addContactAction = (value) => {

    return { type: addContact, payload: value }
}