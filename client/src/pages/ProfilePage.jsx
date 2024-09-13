import React from 'react'
import { useParams } from 'react-router-dom';

function ProfilePage() {

  const {id} = useParams();
  return (
    <>
      <div>ProfilePage</div>
      <h1>{id}</h1>
    </>

  )
}

export default ProfilePage