import React from 'react';

const test = {
    jobTitle: "Sr. Software Engineer",
    companyName: "Google",
    jobListingUrl: "http://www.google.com",
    dateLastChecked: "08-08-08",
    starred: false,
    status: "interested"

}

const JobDisplay = (props) => {
    return (
        <div className= "jobDisplay">
            <div className="starButton">
              <input type="image" src= "https://upload.wikimedia.org/wikipedia/commons/2/29/Gold_Star.svg" />
            </div>
           
            <div className= "jobTitle">
               {test.jobTitle}
            </div>
            <div className= "jobCompanyName">
               {test.companyName}
            </div>
            <div className= "jobListingUrl">
              <a href = {test.jobListingUrl}>Job Listing</a>
            </div>
            <div className= "jobDateLastChecked">
               {test.dateLastChecked}
            </div>
            <label for="status">Status</label>
            <select name="status" id="status">
                <option value="interested">Interested</option>
                <option value="applied">Applied</option>
                <option value="interviewing">Interviewing</option>
                <option value="declined">Declined</option>
            </select>
            <div id="notes">
               Notes
               <div contenteditable="true" id = "notesField">

               </div>
            </div>
           

        </div>
    )
}

export default JobDisplay;