import { Component } from 'react';
class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="alert alert-warning">
                    <button type="button" data-dismiss="alert" aria-hidden="true" className="close">&times;</button>
                    <strong>Khong tim thay trang</strong>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
