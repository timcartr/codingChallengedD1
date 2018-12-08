import React, { Component } from 'react'

// CSS
import './OnlineUsers.css'

// Components
import UserBlock from './UserBlock';

// Test Logic
import {toggle, getProducts} from '../logic/logic'

export default class OnlineUsers extends Component {
  constructor(){
    super()
    this.state = {
      showOnlineUsers: false,
      users: []
    }
  }

  componentDidMount(){
    getProducts().then(res => {
    this.setState({
      users: res.data
    })  
    })
  }

  handleClick(){
    this.setState({
      showOnlineUsers: toggle(this.state.showOnlineUsers)
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1 className='h1--header'>Online Users</h1>
          <button className='btn--header' onClick={() => this.handleClick()}>{this.state.showOnlineUsers ? 'Hide Users' : 'Show Users'}</button>
        </header>
        <div className={this.state.showOnlineUsers ? 'collapsible' : 'collapsible--hidden'}>
          <div className='online-users'>
            {this.state.users[0] 
            ? this.state.users.map((user,index) => {
              return(
                <UserBlock user={user} key={index}/>
                )
              })
            : null
            }
          </div>
        </div>
      </div>
    )
  }
}
