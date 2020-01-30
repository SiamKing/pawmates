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
                        postalcode: 8528
                    }
                }
                })
            }
            )
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.errors) {
                    let error = data.errors[0].detail
                    dispatch({ type: "ERROR", error })
                } else {
                    dispatch({ type: "ADD_ANIMALS", data })
                }
            })
            .catch(error => console.log(error))
    }
}