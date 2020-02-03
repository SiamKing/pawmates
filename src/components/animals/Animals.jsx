import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup'
import Animal from './Animal'
import { Card } from 'react-bootstrap'

class Animals extends Component {

    render() {
        const { animals } = this.props
        console.log(animals)
        return (
            <Container>
                <Row className="my-2">
                    <CardGroup>
                    {animals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })}
                    </CardGroup>
                </Row>
            </Container>
        )
    }
}

export default Animals;