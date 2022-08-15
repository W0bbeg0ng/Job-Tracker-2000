import React, { useEffect, useState } from "react";
import TabsContainer from "./TabsContainer";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import NewJobForm from "./NewJobForm";


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

  const [data, setData] = useState([]);

  async function getJobData() {
    const response = await fetch("/api/jobs", 
    {method: "GET", 
     headers: {"Content-Type": "application/json"},

            }
    );
    const jobList = await response.json();
    console.log("jobList",jobList);
    // return data;
    const newJobList = jobList.map(element => {

  const newElement = {jobTitle: element.jobtitle,
  companyName: element.company_id,
  jobListingUrl: element.url,
  dateCreated: element.datecreated,
  starred: element.starred,
  status: element.status,
 
  notesText: element.note,};
  return newElement;
 

    });
    
  setData(newJobList);
  }

  useEffect(() => {

    getJobData();
    // setData(newData);

  },[])
  return (
   <div className = "container">
      
     <TabsContainer>
       <div label = "Jobs">
        <NewJobForm />
        <JobList testList = {data}/>
       </div>
       <div label = "Companies">
        <CompanyList />
       </div>
       </TabsContainer>
       

     
    
    </div>);
}

export default Container;