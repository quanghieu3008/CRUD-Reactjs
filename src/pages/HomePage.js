import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <h1>Trang Chủ</h1>
                <a href="/items">Chuyển sang trang  item</a>
            </div>
        );
    }
}

export default HomePage