import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup'

import Animal from './Animal'
import Paginator from '../modules/Paginator'
class Animals extends Component {

    render() {
        const { animals, meta, handleDispatch } = this.props;

        return (
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
        )
    }
}

export default Animals;