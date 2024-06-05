import React from 'react'
import Registerform from '../../../../../components/homepage/AuthComponents/Registerform'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div className='container-fluid'>
        <h1 className='display-1 my-5 text-center'>Register</h1>
      <div className='row'>
        <div className='col-md-5 mx-auto mt-5'>
            <Registerform/>
            <Link to='/login'>
                Already a member? Login
            </Link>

        </div>

    </div>
    </div>
    </div>
  )
}

export default Register
