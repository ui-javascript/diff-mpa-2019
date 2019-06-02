import React, { Component } from 'react'
import { Route,withRouter } from 'react-router-dom'
import BottomBar from '../BottomBar/BottomBar.jsx'
import Home from '../Home/Home'
import Order from '../Order/Order.jsx'
import My from '../My/My.jsx'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Route exact path="/home" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/my" component={My} />
        <BottomBar />
      </div>
    )
  }
}

export default withRouter(Main)
