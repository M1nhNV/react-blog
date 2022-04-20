import React from 'react'

class Test extends React.Component{
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="shopping-list">
        <h1>Test component {this.props.name}</h1>
      </div>
    )
  }
}

export default Test
