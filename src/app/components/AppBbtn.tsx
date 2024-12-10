import React from 'react'
import "./AppBtn.css";

export default function AppBbtn({name}: {name: string}) {

  const handelScrollTo = (content: string) => {
    // Scroll to the content
  }
  return (
    <a className='app-btn scrollto d-noned-lg-flex' onClick={()=>handelScrollTo('book-a-table')}>
      {name}
    </a>
  )
}
