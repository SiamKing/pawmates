import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row'

const Paginator = ({ meta, handleDispatch }) => {

    const { count, countReturned, pageReturned, limit, pages } = meta;
    const beginAnimals = (pageReturned - 1) * 24 + 1;
    const lastAnimals = pageReturned === pages ? count : beginAnimals + 23;

    const range = (start, end) => {
        let pageLimit = pages < 4 ? pages - 1 : 4;
        let pageStart = end > pages ? pages - pageLimit : start;
        let pageEnd = end > pages ? pages : end;
        return Array(pageEnd - pageStart + 1).fill().map((_, i) => pageStart + i)
    }
    return (
        <>
            <Row className="flex justify-content-center mt-4">
                <Pagination>
                    <Pagination.First onClick={() => handleDispatch(pages[0])} />
                    {
                        pageReturned === 1 ? null :
                            <Pagination.Prev onClick={() => handleDispatch(pageReturned - 1)} />
                    }

                    { pages ?
                        range(pageReturned, pageReturned + 4).map((pageNumber, i) => {
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

                    { pageReturned === pages ? null :
                        <Pagination.Next onClick={() => handleDispatch(pageReturned + 1)} />
                    }
                    <Pagination.Last onClick={() => handleDispatch(pages)} />
                </Pagination>
            </Row>
            <Row className="justify-content-center">
                <p className="small">Showing {beginAnimals} thru {lastAnimals} of {count}  </p>
            </Row>
        </>
    )
}

export default Paginator;