export default function manageAnimals(state = { animals: ["Dog"] }, action) {
    switch (action.type) {
        case "ADD":
            return state;
        default:
            return state;
    }
}