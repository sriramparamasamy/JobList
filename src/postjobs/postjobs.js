import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Collapse,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';

//import superagent from 'superagent';
//import Cookies from 'universal-cookie';
// import { ToastContainer, toast } from 'react-toastify';

class PostJobs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: '',
            Description: '',
            // Skills_needed: '',
            // Rate_per_hour_or_fixed_price: '',
            // Location_of_Job: '',
            // Qualifications: '',
            // Acceptance_criteria: '',
            // List_of_expectations: '',
            // Photographs: '',
            // Apply_to_Email: '',
            // Travel_needed: '', 
            // Should_need_a_car: '', 
          
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.PostJobs = this.PostJobs.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(name+":=>"+value);

        this.setState({
            [name]: value
        });
    }

    PostJobs(event) {
        let currentTask = this;
        event.preventDefault();
        // superagent
        //     .post('http://localhost:xxxx/api/xxxx')
        //     .send(this.state)
        //     .set('Accept','application/json')
        //     // .set('authorization', cookies.get('token'))
        //     .then(function (res) {
        //         //setTimeout(function() { toast.success("Jobs posted successfully"); }.bind(this), 0);
                currentTask.props.history.push("/PostJobs");
            }

    render() {
        return (<div className="animated fadeIn">
        {/* <ToastContainer/> */}
        <Row>
        <Col xs="12" sm="12">
          <Card>
            <CardHeader>
              <strong>PostJobs</strong>
              <Button outline color="primary"  >PostJobs</Button>

            </CardHeader>
            <CardBody>
              <form onSubmit={this.addProject}>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Title">Title</Label>
                      <Input name="Title" id="Title" type="String" value={this.state.Title} onChange={this.handleInputChange} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Description">Description</Label>
                      <Input name="Description" id="Description" type="String" value={this.state.Description} onChange={this.handleInputChange} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Skills_needed">Skills_needed</Label>
                      <Input name="Skills_needed" id="Skills_needed" type="String" value={this.state.Skills_needed} onChange={this.handleInputChange} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Rate_per_hour_or_fixed_price">Rate_per_hour_or_fixed_price</Label>
                      <Input name="Rate_per_hour_or_fixed_price" id="Rate_per_hour_or_fixed_price" type="String" value={this.state.Rate_per_hour_or_fixed_price} onChange={this.handleInputChange} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Location_of_Job">Location_of_Job</Label>
                      <Input name="Location_of_Job" id="Location_of_Job" type="String" value={this.state.Location_of_Job} onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Photographs">Photographs</Label>
                      <Input name="Photographs" id="Photographs" type="String" value={this.state.QualifPhotographsications} onChange={this.handleInputChange} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Acceptance_criteria">Acceptance_criteria</Label>
                      <Input name="Acceptance_criteria" id="Acceptance_criteria" type="String" value={this.state.Acceptance_criteria} onChange={this.handleInputChange} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="List_of_expectations">List_of_expectations</Label>
                      <Input name="List_of_expectations" id="List_of_expectations" type="String" value={this.state.List_of_expectations} onChange={this.handleInputChange} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Qualifications">Qualifications</Label>
                      <Input name="Qualifications" id="Qualifications" type="Number" value={this.state.Qualifications} onChange={this.handleInputChange} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Apply_to_Email">Apply_to_Email</Label>
                      <Input name="Apply_to_Email" id="Apply_to_Email" type="String" value={this.state.Apply_to_Email} onChange={this.handleInputChange} required/>
                    </FormGroup>
                  </Col>
                </Row> 
                {/* {/* <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Team_Member">Team Member</Label>

                      <Input type="select" name="Team_Member" id="Team_Member" value={this.state.Team_Member} onChange={this.handleInputChange} required>
                      <option value="">--Select--</option>
                      {
                      this.state.userData.map(function(datainfo,index) {
                        return(
                        <option key={index} value={datainfo._id}>{datainfo.fname}{' '}{datainfo.lname}</option>
                        )

                      },this)
                    }
                      </Input>

                    </FormGroup>
                  </Col>
                </Row> */}
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="Project_Status">Project_Status</Label>

                      <Input type="select" name="Project_Status" id="Project_Status" value={this.state.Project_Status} onChange={this.handleInputChange} required>
                        <option value="">--Select--</option>
                        <option value="Active">Active</option>
                        <option value="WIP">WIP</option>
                        <option value="On-Hold">On-Hold</option>
                        <option value="Complete">Complete</option>                      
                      </Input>

                    </FormGroup>
                  </Col>
                </Row>
                <Button color="primary">Submit</Button>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>);
  }
}

export default PostJobs;

