import React from 'react'
import MainLayout from "../layout/Main";

class HomePageView extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <MainLayout>
        <slot>Home page</slot>
      </MainLayout>
    )
  }
}

export default HomePageView
