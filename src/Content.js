import React from 'react'
import {useState} from 'react'
import {FaTrashAlt, faTrashAlt} from 'react-icons/fa'
import './assets/css/sass/themes/gogo.light.blueyale.scss';


const Content = () => {
    const [items, setItems] = useState([

        {
            id: 1,
            checked: false,
            item: 'Big ol bag a dirt'
        },
        {
            id: 2,
            checked: false,
            item: 'Big ol bucket a slop'
        },
        {
            id: 3,
            checked: false,
            item: 'Big ol sack a beans'
        }


    ])
   

    return (
        <main>
           <ul>
                {items.map((item)=>(
                    <li className="item" key={item.id}>
                        <input 
                            type="checkbox"
                            checked={item.checked} />
                            <label>{item.item}</label>
                            <FaTrashAlt 
                                role="button" 
                                tabIndex="0"    
                            />

                    </li>
                    
                ))}
           </ul>
          
        </main>
    )
}

export default Content
