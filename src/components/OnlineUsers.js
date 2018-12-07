import React, { Component } from 'react'
import axios from 'axios'
import './OnlineUsers.css'
import UserBlock from './UserBlock';

export default class OnlineUsers extends Component {
  constructor(){
    super()
    this.state = {
      showOnlineUsers: false,
      users: []
    }
  }

  componentDidMount(){
    axios.get('https://uinames.com/api/?amount=12&ext&region=united%20states').then(res => {
      // console.log(res.data)
    this.setState({
      users: res.data
    })  
    })
  }

  handleClick(){
    this.setState({
      showOnlineUsers: !this.state.showOnlineUsers
    })
  }

  render() {
    console.log(this.state.showOnlineUsers)
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
              <UserBlock user={user} index={index}/>
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
