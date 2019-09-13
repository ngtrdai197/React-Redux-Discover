import React from 'react'

export default function ProductDetails({match}) {
    return (
        <div>
            Product Details working !!!
            <h1>Parameter : {match.params.productId}</h1>
        </div>
    )
}
