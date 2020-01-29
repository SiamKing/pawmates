export function fetchAnimals(searchFields) {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_ANIMALS_REQUEST" });
        fetch(
            "https://test1-api.rescuegroups.org/v5/public/animals/breeds/search/cats/?fields[species]=singular,plural&include=species&limit=25&sort=+breeds.name",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "MhU2YjEx"
                },
                body: JSON.stringify({
                    "data": {
                        "filterRadius": {
                            "miles": 25,
                            "postalcode": 85281
                        }
                    }
                })
            }
        )
            .then(response => response.json())
        .then(animals => dispatch({ type: 'ADD_ANIMALS', animals}))
    }
}