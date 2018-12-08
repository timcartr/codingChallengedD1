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
      <div className='online-users'>
        <header>
          <h1 className='header__h1--header'>Online Users</h1>
          <button className='header__btn--header' onClick={() => this.handleClick()}>{this.state.showOnlineUsers ? 'Hide Users' : 'Show Users'}</button>
        </header>
        <div className={this.state.showOnlineUsers ? 'collapsible' : 'collapsible--hidden'}>
          <div className='users-list'>
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
