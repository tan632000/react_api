import { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {actAddProductRequest, actGetProductRequest, actUpdateProductRequest} from './../../actions/index'
class ProductActionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : '',
            txtName: '',
            txtPrice: '',
            chkStatus : ''
        }   
    }
    componentDidMount() {
        var {match} = this.props
        if (match) {
            var id = match.params.id
            this.props.onEditProduct(id)
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            var {itemEditting} = nextProps
            this.setState({
                id : itemEditting.id,
                txtName: itemEditting.name,
                txtPrice: itemEditting.price,
                chkStatus : itemEditting.status
            })
        }
    }
    // static getDerivedStateFromProps(props, state) {
    //     if (props && props.itemEditting) {
    //         var {itemEditting} = props
    //         return {
    //             id : itemEditting.id,
    //             txtName: itemEditting.name,
    //             txtPrice: itemEditting.price,
    //             chkStatus : itemEditting.status
    //         };
    //     }
    //     return null;
    // }   
    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value= target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name] : value
        })
    }
    render() {
        var {txtName,txtPrice,chkStatus} = this.state
        return (
            <div className="col-xs-6 col-md-6 col-lg-6 col-sm-6">
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Ten san pham</label>
                        <input required
                            type="text" 
                            className="form-control" 
                            name="txtName" 
                            value={txtName}
                            onChange={this.onChange}    
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Gia</label>
                        <input required
                            type="number" 
                            className="form-control" 
                            name="txtPrice" 
                            value={txtPrice}
                            onChange={this.onChange}     
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Trang thai</label><br></br>
                        <input 
                            type="checkbox"
                            name="chkStatus"
                            value={chkStatus}
                            checked = {chkStatus}
                            onChange={this.onChange}    
                        /> Con hang
                    </div>
                    <Link to={"/product-list"} className="btn btn-danger mr-10">Quay lai</Link>
                    <button 
                        type="submit" 
                        className="btn btn-primary">
                        Luu lai
                    </button>
                </form>
            </div>
        );
    }
    onSubmit = (e) => {
        e.preventDefault();
        var {history} = this.props
        var {id,txtName,txtPrice,chkStatus} = this.state
        var product = {
            id : id,
            name : txtName, 
            price : txtPrice,
            status : chkStatus
        }
        if (id) {
            this.props.onUpdateProduct(product)
        } else {
            this.props.onAddProduct(product)
        }
        history.goBack()
    }
}

const mapStateToProps = state => {
    return {
        itemEditting : state.itemEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct : (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct : (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
