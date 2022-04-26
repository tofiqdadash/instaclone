import React from 'react'
import { Link } from 'react-router-dom'

const UserDontExist = () => {
  return (
    <div>
         <h4>
          You are not logged in, go to <Link to="/login">Login</Link>
        </h4>
    </div>
  )
}

export default UserDontExist