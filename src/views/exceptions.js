import React from 'react'
import Exception403 from "./exeptions/403";
import Exception404 from "./exeptions/404";

class ExceptionsPageView extends React.Component {
  constructor(props) {
    super(props);
    this.loadPage()
  }

  loadPage () {
    if (this.props.type === 403) {
      return <Exception403 />
    }

    return <Exception404 />
  }

  render() {
    return (
      <>
        <h2>Exception page </h2>
        {this.loadPage()}
      </>
    )
  }
}

export default ExceptionsPageView
