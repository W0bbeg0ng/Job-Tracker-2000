import React from "react";
import TabsContainer from "./TabsContainer";
import JobList from "./JobList";
import CompanyList from "./CompanyList"

const Container = (props) => {
  return (
   <div className = "container">
    <h1>Tabs Test</h1>
      
     <TabsContainer>
       <div label = "Jobs">
        <JobList />
       </div>
       <div label = "Companies">
        <CompanyList />
       </div>
       </TabsContainer>
       

     
    
    </div>);
}

export default Container;