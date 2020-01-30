export default function manageAnimals(state = { animals: [], error: "", requesting: false }, action) {
    switch (action.type) {
        case "START_ADDIN_ANIMALS_REQUEST":
            return {
                ...state,
                animals: [...state.animals],
                requesting: true
            }

        case "ADD_ANIMALS":
            return {
                ...state,
                animals: action.animals,
                requesting: false
            }
        
        case "ERROR":
            return {
                ...state,
                error: action.error,
                requesting: false
            }

        default:
            return state;
    }
}