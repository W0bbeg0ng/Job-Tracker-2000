import React from 'react';

const test = {
    jobTitle: "Sr. Software Engineer",
    companyName: "Google",
    jobListingUrl: "http://www.google.com",


}

const JobDisplay = (props) => {
    return (
        <div className= "jobDisplay">
            <div className = "jobTitle">
               
                {test.jobTitle}

            </div>
            <div className = "jobCompanyName">
                
                {test.companyName}
            </div>
            <div>
                <a href = {test.jobListingUrl}>Job Listing</a>
                </div>


      

        </div>
    )
}

export default JobDisplay;