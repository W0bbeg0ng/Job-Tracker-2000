import React from 'react';
import JobDisplay from './JobDisplay'

// const test = {testList: [{
//     jobTitle: "Sr. Software Engineer",
//     companyName: "Google",
//     jobListingUrl: "http://www.google.com",
//     dateLastChecked: "08-08-08",
//     starred: false,
//     status: "applied",
//     starOnClick: "func",
//     notesText: "okay job",
//     notesSave: "func"

// },
// {
//     jobTitle: "Jr. Software Engineer",
//     companyName: "GoogleJr",
//     jobListingUrl: "http://www.google.com",
//     dateLastChecked: "08-08-09",
//     starred: false,
//     status: "interviewing",
//     starOnClick: "func",
//     notesText: "",
//     notesSave: "func"

// }]}


const JobList = (props) => {
    const jobs = props.testList;
    const array = jobs.map(element => <JobDisplay jobTitle = {element.jobTitle} companyName= {element.companyName}
        jobListingUrl = {element.jobListingUrl} dateLastChecked = {element.dateLastChecked} starred= {element.starred}
        status = {element.status} starOnClick={element.starOnClick} notesText = {element.notesText}/>)

    return (
        <div className= "jobsList">
            {array}
        </div>
    )
}

export default JobList;