import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Dom', 'DJ Dommy Dom', 'Downtown Dom']
        const int = Math.floor(Math.random() * 3)
        return names[int]
    
    
      }

      const handleClick = () => {
        console.log('You clicked it')
    
      }
      const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    
      }
      const handleClick3 = (e) => {
        console.log(e.target)
    
      }

    return (
        <main>
           
            <p>
            Hello {handleNameChange()}!
            </p>
        <button onClick={handleClick}>Click me you fool !</button>
        <button onClick={() => handleClick2('Downtown Dom')}>Click me you fool with param!</button>
        <button onClick={(e) => handleClick3(e)}>Click to view event</button>
        </main>
    )
}

export default Content
