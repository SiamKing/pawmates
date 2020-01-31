import React, { Component } from "react";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/button'

class Animal extends Component {
    render() {
        let { animal } = this.props
        animal = animal.attributes
        console.log(animal)
        return (
            <Col xs={12} sm={6} md={4} lg={3}>
                <Card>
                    <Card.Img className="img-thumbnail" variant="top" src={animal.pictureThumbnailUrl} />
                    <Card.Body>
                        <Card.Title>{animal.name} - <span className="text-muted">{animal.sex}</span></Card.Title>
                        <Card.Text className="">
                            <div dangerouslySetInnerHTML={{ __html: animal.descriptionText }} className="truncate-text" ></div>
                        </Card.Text>
                        <Button variant="primary" href={animal.url} target="_blank">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
  }
}

export default Animal;
