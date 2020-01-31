import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Animal from './Animal'

class Animals extends Component {

    render() {
        const { animals } = this.props
        return (
            <Container>
                <Row>
                    {animals.map(animal => {
                        return <Animal animal={animal} />
                    })}
                </Row>
            </Container>
        )
    }
}

export default Animals;