
import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className='mt-3 text-center text-black-500'>please login</div>

    return <div className='mt-3 text-center text-blue-700'>Welcome {user.username}</div>
}

export default Profile
