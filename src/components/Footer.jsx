import React from 'react'

function Footer() {
  const getCurrentYear =()=> {
    return new Date().getFullYear();
  }

  return (
    <footer className="footer text-center py-5">
    Melbourne Weather App &copy; {getCurrentYear()}
  </footer>
  )
}

export default Footer
