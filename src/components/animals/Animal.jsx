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
            <Col xs={12} sm={6} md={4} lg={3} className="my-3">
                <Card>
                    <div className="p-1">
                            <Card.Img className="img-thumbnail float-right" variant="right" src={animal.pictureThumbnailUrl} />
                        <div className="float-left pl-1">
                            <div className="mb-0 title-card">{animal.name}</div>
                            <p className="text-muted my-0">{animal.sex}</p>
                            <p className="text-muted my-0">{animal.newPeopleReaction}</p>
                            <p className="text-muted my-0">{animal.qualities[0]}</p>
                        </div>

                    </div>
                    <Card.Body>
                        <Card.Text>
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
