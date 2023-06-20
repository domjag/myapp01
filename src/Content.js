import React from 'react'
import {useState} from 'react'

const Content = () => {
    const [name, setName] = useState('Dom')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ['Dom', 'DJ Dommy Dom', 'Downtown Dom']
        const int = Math.floor(Math.random() * 3)
        return setName(names[int])
    
    
      }

      const handleClick = () => {
        setCount(count + 1)
        console.log(count)
    
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
            Hello {name}!
            </p>
        <button onClick={handleNameChange}>Click to change name</button>
        <button onClick={handleClick}>Click to getCount</button>
        <button onClick={() => handleClick2('Downtown Dom')}>Click me you fool with param</button>
        <button onClick={(e) => handleClick3(e)}>Click to view event</button>
        </main>
    )
}

export default Content
