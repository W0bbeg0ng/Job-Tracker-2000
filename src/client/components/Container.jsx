import React, { useState, useEffect } from "react";
import TabsContainer from "./TabsContainer";
import JobList from "./JobList";
import CompanyList from "./CompanyList"
import NewJobForm from "./NewJobForm"

const test = {testList: [{
  jobTitle: "Sr. Software Engineer",
  companyName: "Google",
  jobListingUrl: "http://www.google.com",
  dateLastChecked: "08-08-08",
  starred: false,
  status: "applied",
  starOnClick: "func",
  notesText: "okay job",
  notesSave: "func"

},
{
  jobTitle: "Jr. Software Engineer",
  companyName: "GoogleJr",
  jobListingUrl: "http://www.google.com",
  dateLastChecked: "08-08-09",
  starred: false,
  status: "interviewing",
  starOnClick: "func",
  notesText: "",
  notesSave: "func"

}]}

const Container = (props) => {


//  useEffect(() => {
//   const response = await fetch ("/api", {
//     method: "GET",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({username})
//   })
//  })
  
  return (
   <div className = "container">
    <h1>Tabs Test</h1>
      
     <TabsContainer>
       <div label = "Jobs">
        <NewJobForm />
        <JobList testList = {test.testList}/>
       </div>
       <div label = "Companies">
        <CompanyList />
       </div>
       </TabsContainer>
       

     
    
    </div>);
}

export default Container;