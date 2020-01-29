export default function manageAnimals(state = { animals: [], requesting: false }, action) {
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
                animals: action.animals.data,
                requesting: false
            }

        default:
            return state;
    }
}