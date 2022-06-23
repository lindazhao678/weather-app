import React from 'react'

function Footer() {
  const getCurrentYear =()=> {
    return new Date().getFullYear();
  }

  return (
    <footer className="footer mt-2 text-center p-3">
    Weather App &copy; {getCurrentYear()}
  </footer>
  )
}

export default Footer
