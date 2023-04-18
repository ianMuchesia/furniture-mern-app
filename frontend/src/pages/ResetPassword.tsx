import React from 'react'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div>ResetPassword</div>
  )
}

export default ResetPassword