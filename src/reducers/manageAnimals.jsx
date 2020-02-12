const initState = {
    animals: [], error: "", meta: "", searchFields: {}, showErrorModal: false, requesting: false 
}

export default function manageAnimals(state = initState, action) {
    switch (action.type) {
        case "START_ADDING_ANIMALS_REQUEST":
            return {
                ...state,
                animals: [...state.animals],
                searchFields: { ...action.searchFields },
                requesting: true
            }

        case "ADD_ANIMALS":
            let payload = action.data
            let animals = payload.data
            let pictures = payload.included
            let newAnimals = animals.map(animal => {
                let pics = animal.relationships ? pictures.find(picture => animal.relationships.pictures.data[0].id === picture.id) : ""
                return {
                    ...animal.attributes,
                    picture: pics ? pics.attributes.large.url : "",
                    id: animal.id
                }
            })
            return {
                ...state,
                animals: newAnimals,
                meta: payload.meta,
                requesting: false
            }
        
        case "NO_RESULTS":
            return {
                ...state,
                error: 0,
                requesting: false,
                showErrorModal: true
            }
        
        case "ERROR":
            return {
                ...state,
                error: 1,
                requesting: false
            }
        
        case "CLOSE_MODAL":
            return {
                ...state,
                showErrorModal: false
            }

        default:
            return state;
    }
}