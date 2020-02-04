import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import Pagination from 'react-bootstrap/Pagination'

import Animal from './Animal'
class Animals extends Component {

    render() {
        const { animals, meta, handleDispatch } = this.props;
        const { count, countReturned, pageReturned, limit, pages } = meta;
        const beginAnimals = (pageReturned - 1) * 24 + 1;
        const lastAnimals = beginAnimals + 23;

        return (
            <Container>
                <Row className="my-2">
                    <CardGroup>
                    {animals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })}
                    </CardGroup>
                </Row>
                <Row className="justify-content-md-center">
                    <p>Showing {beginAnimals} thru {lastAnimals} of {count}  </p>
                </Row>
                <Row className="justify-content-md-center">
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
            </Container>
        )
    }
}

export default Animals;