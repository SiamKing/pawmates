import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row'

const Paginator = ({ meta, handleDispatch }) => {

    const { count, countReturned, pageReturned, limit, pages } = meta;
    const beginAnimals = (pageReturned - 1) * 24 + 1;
    const lastAnimals = beginAnimals + 23;
    return (
        <>
            <Row className="justify-content-md-center mt-4">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    {/* <Pagination.Item active={pageReturned == 1}>{1}</Pagination.Item> */}

                    { pages ?
                        [...Array(pages)].map((_, i) => {
                            const pageNumber = i + 1
                            return (
                                <Pagination.Item
                                    key={pageNumber}
                                    active={pageReturned === pageNumber}
                                    onClick={() => handleDispatch(pageNumber)}
                                >{pageNumber}
                                </Pagination.Item>
                            )
                        })
                        : ''
                    }

                    {/* <Pagination.Item >{pages}</Pagination.Item> */}
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Row>
            <Row className="justify-content-md-center">
                <p>Showing {beginAnimals} thru {lastAnimals} of {count}  </p>
            </Row>
        </>
    )
}

export default Paginator;