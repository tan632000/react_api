import { Component } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {actFetchProductRequest, actDeleteProductRequest} from './../../actions/index'

class ProductListpage extends Component {
    componentDidMount(){
        this.props.fetchAllProducts()
    }
    render() {
        var {products} = this.props;
        return (
            <div className="col-xs-12 col-md-12 col-lg-12 col-sm-12">
                <Link to='/product/add' className="btn btn-success mb-10">
                  Them san pham
                </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product = {product}
                        index = {index}
                        onDelete = {this.onDelete}
                    ></ProductItem>
                )
            });
        }
        return result
    }
    onDelete = (id) => {
        this.props.deleteProduct(id)
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductRequest())
        },
        deleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListpage);
