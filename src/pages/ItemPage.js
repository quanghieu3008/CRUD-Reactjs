import React from 'react'
import ItemContainer from '../containers/ItemPageContainer'
import GuestGreeting from '../components/flex.js'
class ItemPage extends React.Component {
    render() {
        return (
            <div className="ItemPage">
                <h1>Trang Items</h1>
                <ItemContainer></ItemContainer>
                <GuestGreeting></GuestGreeting>
            </div>
            
        );
    }
}

export default ItemPage