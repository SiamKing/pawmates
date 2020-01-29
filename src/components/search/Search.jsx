import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap'

const SPECIES = [
    { label: "Select Species", value: "" },
    { label: "Dogs", value: "8" },
    { label: "Cats", value: "3" }
]

const RADIUSES = [
    { label: "Select Distance", value: "" },
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
    { label: "100", value: "100" }
]

const RADIUSES_ARRAY = ["5", "10", "25", "50", "100"]

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchCriteria: {
                species: '',
                zipCode: '',
                radius: ''
            },
            formErrors: { species: '', zipCode: '', radius: '' },
            speciesValid: false,
            zipCodeValid: false,
            radiusValid: false,
            formValid: false
        }
    }

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let speciesValid = this.state.speciesValid;
        let zipCodeValid = this.state.zipCodeValid;
        let radiusValid = this.state.radiusValid;
        
        switch (fieldName) {
            case 'species':
                speciesValid = value === '3' || value === '8' ? true : 'Please choose a species'
                fieldValidationErrors.species = speciesValid ? '' : ' is invalid'
                break;
        
            case 'zipCode':
                const zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
                zipCodeValid = zipCodePattern.test(value)
                fieldValidationErrors.zipCode = zipCodeValid ? '' : ' must contain 5 numbers'
                break;
        
            case 'radius':
                radiusValid = RADIUSES_ARRAY.includes(value)
                fieldValidationErrors.radius = radiusValid ? '' : 'Please choose a radius'
                break;
        
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            speciesValid: speciesValid,
            zipCodeValid: zipCodeValid,
            radiusValid: radiusValid
        }, this.validateForm)
    }

    validateForm = () => {
        this.setState({
            formValid: this.state.speciesValid && this.state.zipCodeValid && this.state.radiusValid
        })
    }

    errorClass = error => {
        return (error.length === 0 ? '' : 'has-error')
    }

    handleSearchSubmit = event => {
        event.preventDefault();
        this.props.handleDispatch(this.state.searchCriteria)
    }

    handleChange = event => {
        const name = event.target.name,
            value = event.target.value;
        this.setState({
            searchCriteria: {
                ...this.state.searchCriteria,
                [name]: value
            }
        }, () => { this.validateField(name, value) }
        )
    }

    renderSelect = (selections) => {
        return selections.map(selection => {
            return (
                selection.value === "" ? <option key={selection.value} defaultValue={selection.value} disabled>{selection.label}</option>
                    : <option key={selection.value} value={selection.value}>{selection.label}</option>
            )
        })
    }

    renderTooltip = props => {
        return (
            this.state.formValid ? '' : <Tooltip className="mt-2" id="tooltip-disabled" {...props}>Please make selections before searching</Tooltip>
        )
    }

    render() {
        // console.log(this.state.searchCriteria)
        return (
            <div className="d-flex flex-column align-content-center">
                <p className="mb-4 text-muted p-line-height">We searched the universe far and wide to find your pawmate!</p>
                <div className="panel panel-default">
                    {/* <FormErrors formErrors={this.state.formErrors} /> */}
                </div>
                <Form>
                    <Form.Group controlId="formSpecies" className={this.errorClass(this.state.formErrors.species)}>
                        <Form.Control as="select" defaultValue="Select Species" name="species" onChange={this.handleChange}>
                            {this.renderSelect(SPECIES)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formZipCode" className={this.errorClass(this.state.formErrors.zipCode)}>
                        <Form.Control type="text" placeholder="Enter Zip Code" name="zipCode" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formRadius" className={this.errorClass(this.state.formErrors.radius)}>
                        <Form.Control as="select" defaultValue="Select Distance" name="radius" onChange={this.handleChange}>
                            {this.renderSelect(RADIUSES)}
                        </Form.Control>
                    </Form.Group>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={this.renderTooltip}
                    >
                        <span>
                            <Button
                                type="submit"
                                variant="primary"
                                onSubmit={this.handleSearchSubmit}
                                disabled={!this.state.formValid}
                                style={{ pointerEvents: 'none' }}
                            >
                                Search
                            </Button>
                        </span>
                    </OverlayTrigger>
                </Form>
            </div>
        );
    }
}

export default Search