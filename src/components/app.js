import React from 'react';
import Postjobslist from './../containers/postjobslist';
import PostJobsDetails from './../containers/postjobsdetails';




const App1 = () => (
    <div>
        <h2>
            PostJobs list</h2>  
            <Postjobslist></Postjobslist>

        <hr/>
        <h2> PostJobs details </h2>
        <PostJobsDetails></PostJobsDetails>
        
        </div>

); 

export default App1;
