import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import postjobsreducers from '../reducers/postjobsreducers';
import {selectJobs} from '../actions/index'


class Postjobslist extends Component {

    createPostJobsListItems(){
        return this.props.postjobs.map((user) => {
            return (
                <li 
                    key= {user.id}
                    onClick= {() => this.props.selectJobs(user)} 
                    >
                    {user.Title}</li>
            );
        });
    }
    render() {
        return (
            <ul>
            
            {this.createPostJobsListItems()}
            </ul>
            
        );
}
}

function mapStateToProps(state) {
    return {
        postjobs: state.postjobs
    }; 
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectJobs:selectJobs}, dispatch)
}




export default connect(mapStateToProps,matchDispatchToProps)(Postjobslist);


