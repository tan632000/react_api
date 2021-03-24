import { Component } from "react";
class ProductList extends Component {
  render() {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">Danh sach san pham</h3>
            </div>
            <div className="panel-body">
                <table className="table table-bordered tale-hover">
                    <thead>
                        <tr>
                        <th>STT</th>
                        <th>Ma san pham</th>
                        <th>Ten san pham</th>
                        <th>Gia</th>
                        <th>Trang thai</th>
                        <th>Hanh dong</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        </div>
    );
  }
}

export default ProductList;
