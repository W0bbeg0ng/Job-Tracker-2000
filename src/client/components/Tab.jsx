import React, { Component } from 'react';



class Tab extends Component {


  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'nav-item';
    let linkClass = 'nav-link'

    if (activeTab === label) {
      className += ' active';
      linkClass += ' active'
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        <a class={linkClass} href="#">{label}</a>
      </li>
    );
  }
}

export default Tab;