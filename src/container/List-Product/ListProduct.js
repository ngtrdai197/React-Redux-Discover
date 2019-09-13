import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Product from '../../components/Product/Product'
import { getAllProduct, getProductById } from '../../@store/actions'

function ListProduct(props) {

    useEffect(() => {
        props.getProductList()
        props.getProduct('5d688f980a3fbb24a8fc238d')
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!props.products) return "Loading..."

    return (
        <div className="container">
            <div className="row">
                {/* {console.log(props.products)} */}

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
    foodList: state.foodsReducer,
    products: state.productReducer.products.products
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getProductList: getAllProduct, getProduct: getProductById }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct)