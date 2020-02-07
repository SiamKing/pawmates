import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'

import Animal from './Animal'
import Paginator from '../modules/Paginator'
class Animals extends Component {

    render() {
        const { animals, meta, handleDispatch, searchFields } = this.props;

        return (
            <>
                <Jumbotron fluid className={`results-hero-${searchFields.species}`}>
                    <div className="ml-5 mt-5">
                        <h1 className="ml-5 display-4">{searchFields.species}</h1>
                    </div>
                </Jumbotron>
                <Container>
                    <Row className="my-2">
                        <CardGroup>
                            {animals.map(animal => {
                                return <Animal key={animal.id} animal={animal} />
                            })}
                        </CardGroup>
                    </Row>

                    <Paginator meta={meta} handleDispatch={handleDispatch} />
                </Container>
            </>
        )
    }
}

export default Animals;