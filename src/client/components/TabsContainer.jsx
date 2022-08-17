import React, { Component } from "react";
import JobList from './JobList.jsx';
import CompanyList from './CompanyList.jsx';

import Tab from './Tab'

class TabsContainer extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label, 
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem, // the function above
      props: {children}, // Jobs, Companies -> the two child components of TabsContainer
      state: {activeTab} // the object on line 12
    } = this;

    return (
      <div className="tabs">
        <ol className="nav nav-pills justify-content-center nav-justified">
          {children.map((child) => {
            const { label } = child.props; // either Jobs or Companies - label: Jobs or label: Companies

            return (
              <Tab
                activeTab={activeTab} 
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}


export default TabsContainer;