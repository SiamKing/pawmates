export function fetchAnimals(searchFields) {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_ANIMALS_REQUEST" });
        fetch(
            "https://test1-api.rescuegroups.org/v5/public/animals/search/available/cats/haspic?include=breeds,colors,fosters,locations,orgs,patterns,pictures,species",
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: "MhU2YjEx"
                },
                body: JSON.stringify({
                data: {
                    filterRadius: {
                        miles: 25,
                        postalcode: 85281
                    }
                }
                })
            }
            )
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    let error = data.errors[0].detail
                    dispatch({ type: "ERROR", error })
                } else {
                    let animals = data.data
                    dispatch({ type: "ADD_ANIMALS", animals })
                }
            })
            .catch(error => console.log(error))
    }
}