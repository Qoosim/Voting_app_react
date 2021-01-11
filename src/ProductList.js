import React, { Component } from 'react'
import Product from './components/Product'
import seed from './components/seed'

class ProductList extends Component {
    render() {
        //const product = seed.products[0]
        const productComp = seed.map(item => <Product 
            key={item.id}
            title={item.title}
            description={item.description}
            url={item.url}
            votes={item.votes}
            submitterAvatarUrl={item.submitterAvatarUrl}
            productImageUrl={item.productImageUrl}
            />)
        console.log(productComp)
        return (
            <div className="ui unstackable items divider">
                {productComp[0]}
            </div>
        )
    }
}

export default ProductList
