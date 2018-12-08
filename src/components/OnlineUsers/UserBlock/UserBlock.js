import React from 'react'

// CSS
import './UserBlock.css'

export default function UserBlock(props){
    let user = props.user
    return (
      <div>
        <div className='user-block'>
          <div className='user-info'>
            <img className='user-info__img' src={user.photo} alt=""/>
            <h2 className='user-info__h2'>{user.name} {user.surname}</h2>
          </div>
          <div className='online-status'>Online</div>
        </div>
      </div>
    )
  }
