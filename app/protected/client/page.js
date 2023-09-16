'use client'
import React from 'react'

const ProtectedClientPage = () => {
  return (
    <div>
      <h1>
        This is a <i style={{color: 'red'}}>Client-Side</i> protected page
      </h1>

      <p>You are logged in as: <b>Kavindu</b></p>
    </div>
  )
}

export default ProtectedClientPage