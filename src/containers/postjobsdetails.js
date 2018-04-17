import React, {Component } from 'react';
import {connect} from 'react-redux';

class PostJobsDetails extends Component {
    
    render() {
        if(!this.props.user) {
            return(<h2> Select a user ...</h2>);
        }
        return (
            <div>
                <h2> Title: {this.props.user.Title}</h2>
                <h3> Description: {this.props.user.Description}</h3>
                <h3>Skills_needed: {this.props.user.Skills_needed}</h3>
                <h3>Rate_per_hour_or_fixed_price: {this.props.user.Rate_per_hour_or_fixed_price}"</h3>
                <h3>Location_of_Job:{this.props.user.Location_of_Job}</h3>
                <h3>Qualifications: {this.props.user.Qualifications}</h3>
                <h3>Acceptance_criteria: {this.props.user.Acceptance_criteria}</h3>
                <h3>List_of_expectations: {this.props.user.List_of_expectations}</h3>
                <h3>Photographs: {this.props.user.Photographs}</h3>
                <h3>Apply_to_Email: {this.props.user.Apply_to_Email}</h3>
                <h3>Travel_needed: {this.props.user.Travel_needed}</h3>
                <h3>Should_need_a_car: {this.props.user.Should_need_a_car}</h3>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.activePostjobs
    };
}

export default connect(mapStateToProps)(PostJobsDetails)