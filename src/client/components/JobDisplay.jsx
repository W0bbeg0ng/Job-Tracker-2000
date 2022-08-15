import React, { useEffect } from 'react';



const JobDisplay = (props) => {
    useEffect(() => {
        console.log(document.getElementById(props.status));
        const statusElement = document.getElementById(props.status);
        statusElement.setAttribute("selected","selected");
    });
    return (
        <div className= "jobDisplay">
            <div className="starButton">
              <input type="image" src= "https://upload.wikimedia.org/wikipedia/commons/2/29/Gold_Star.svg" />
            </div>
           
            <div className= "jobTitle">
               {props.jobTitle}
            </div>
            <div className= "jobCompanyName">
               {props.companyName}
            </div>
            <div className= "jobListingUrl">
              <a href = {props.jobListingUrl}>Job Listing</a>
            </div>
            <div className= "jobDateLastChecked">
               {props.dateLastChecked}
            </div>
            <label for="status">Status</label>
            <select name="status" id="status">
                <option value="interested" id = "interested">Interested</option>
                <option value="applied" id = "applied">Applied</option>
                <option value="interviewing" id = "interviewing">Interviewing</option>
                <option value="declined" id = "declined">Declined</option>
            </select>
            <div id="notes">
               Notes
               <div contenteditable="true" id = "notesField">
                    {props.notesText} 
               </div>
            </div>
           

        </div>
    )
}

export default JobDisplay;