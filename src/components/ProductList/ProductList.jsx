import React from 'react'
import './List.css'
import Card from '../Card/Card'
function ProductList({ list }) {
    console.log(list);

    return (
        <div className='container'>
            <div className='flex'>
            {
                list.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            }
    </div>
        </div>
    )
}

export default ProductList
