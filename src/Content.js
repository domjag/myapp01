import React from 'react'

// import './assets/css/sass/themes/gogo.light.blueyale.scss'; This is a gogo them ref
import ItemList from './ItemList';


const Content = ({items, handleCheck, handleDelete}) => {
   
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </>
    )
}

export default Content
