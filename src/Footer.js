import React from 'react'

function Footer() {
  
    let today = new Date().getFullYear()

  return (
    <footer className='Footer'>
        <p>Copyright &copy; {today}</p>
    </footer>
  )
}

export default Footer