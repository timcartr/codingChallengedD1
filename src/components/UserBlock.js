import React, { Component } from 'react'

export default class UserBlock extends Component {
  render() {
    let user = this.props.user
    return (
      <div>
        <div className='user-block'>
          <div className='user-info'>
            <img className='img--user-info' src={user.photo} alt=""/>
            <h2 className='h2--user-info'>{user.name} {user.surname}</h2>
          </div>
          <div className='online-status'>Online</div>
        </div>
      </div>
    )
  }
}
