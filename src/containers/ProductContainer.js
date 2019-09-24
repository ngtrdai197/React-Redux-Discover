import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Product from '../components/Product/Product'
import { getAllProduct } from '../@store/actions';

function ProductContainer(props) {

    useEffect(() => {
        props.getProductList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!props.products) return "Loading..."

    return (
        <div className="container">
            <div className="row">
                {props.products.map(product =>
                    <div className="col-sm-4 col-md-3 mb-3" key={product.id}>
                        <Product product={product} />
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.productReducer.products.products
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getProductList: getAllProduct }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)