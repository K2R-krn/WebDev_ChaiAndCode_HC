import React, { useContext } from 'react'

function Profile() {

    const {user} = useContext(useContext)

    if(!user) return <h1>Not logged in </h1>
    
    return (
    <div>Profile: {user.username}</div>
  )
}

export default Profile