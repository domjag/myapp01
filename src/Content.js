import React from 'react'

import './assets/css/sass/themes/gogo.light.blueyale.scss';
import ItemList from './ItemList';


const Content = ({items, handleCheck, handleDelete}) => {
   
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content
