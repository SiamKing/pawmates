import React, { Component } from "react";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/button'

class Animal extends Component {
    render() {
        let { animal } = this.props
        console.log(animal)
        return ( 
            <Col xs={12} sm={6} md={4} lg={3} className="my-3 px-sm-2 px-xs-4">
                <Card>
                    <Card.Img className="img-thumbnail" variant="top" src={animal.picture} />
                    <Card.Body>
                        <Card.Title>{animal.name} - <span className="text-muted small">{animal.sex}</span></Card.Title>
                        <Card.Subtitle className="text-muted">{animal.breedString}</Card.Subtitle>
                        <Card.Text className="mt-3">
                            <div dangerouslySetInnerHTML={{ __html: animal.descriptionText }} className="truncate-text" ></div>
                        </Card.Text>
                        <Button variant="primary" href={animal.url} target="_blank" className="align-self-end">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
  }
}

export default Animal;
