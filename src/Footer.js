import React from 'react'

const Footer = ({length}) => {
   
  return (
    <footer>
      Copyright &copy; {length} List {length === 1 ? "item" : "items"}
    </footer>
  )
}

export default Footer
