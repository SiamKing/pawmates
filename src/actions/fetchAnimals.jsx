export function fetchAnimals(searchFields, pageNumber = 0) {
    const { species, zipCode, radius } = searchFields;
    const page = pageNumber ? `page=${pageNumber}&` : '';
    return (dispatch) => {
        dispatch({ type: "START_ADDING_ANIMALS_REQUEST", searchFields });
        fetch(
            `https://test1-api.rescuegroups.org/v5/public/animals/search/available/${species}/haspic?${page}limit=24&include=pictures`,
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: "MhU2YjEx"
                },
                body: JSON.stringify({
                data: {
                    filterRadius: {
                        miles: radius,
                        postalcode: zipCode
                    }
                }
                })
            }
            )
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    let error = data.error[0].detail
                    dispatch({ type: "ERROR", error })
                } else {
                    dispatch({ type: "ADD_ANIMALS", data })
                }
            })
            .catch(error => console.log(error))
    }
}