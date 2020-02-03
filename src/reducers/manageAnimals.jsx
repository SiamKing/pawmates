const initState = {
    animals: [], error: "", requesting: false 
}

export default function manageAnimals(state = initState, action) {
    switch (action.type) {
        case "START_ADDING_ANIMALS_REQUEST":
            return {
                ...state,
                animals: [...state.animals],
                requesting: true
            }

        case "ADD_ANIMALS":
            let animals = action.data.data
            let pictures = action.data.included
            let newAnimals = animals.map(animal => {
                let pics = pictures.find(d => animal.relationships.pictures.data[0].id === d.id)
                return {
                    ...animal.attributes,
                    picture: pics.attributes.large.url
                }
            })
            return {
                ...state,
                animals: newAnimals,
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