import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]) // State to store users
  const [loading, setLoading] = useState(true) // Loading state to show loading spinner

  // Fetch data inside useEffect
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUser(response.data) // Save the fetched users into state
        setLoading(false) // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching the users', error)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className='user-list-container'>
          {listOfUser.map((user) => (
            <li key={user.id} className='user-item'>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserList
