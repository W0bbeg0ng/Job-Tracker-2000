import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class Tab extends Component {
//   static propTypes = {
//     activeTab: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
//   };

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