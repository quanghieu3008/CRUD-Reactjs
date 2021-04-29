import React from 'react'
import Items from '../components/Items'
// import GuestGreeting from '../components/nextpage'
import * as actions from '../actions/ItemPageAction'
import {connect} from 'react-redux'
// import NextHieu from '../components/nexxtt'
import PaginnationCommon from "../components/phantrang"
 class ItemPageContainer extends React.Component {
    
    componentDidMount(){
        this.props.initLoad(1)
    }
    
    
    render(){
    
    return(
        <div>
            <Items {...this.props}/>
             {/* {listData} */}
             <PaginnationCommon {...this.props}/>
             
            
        </div>
    )
  
}
}
const mapStateToProps = (state) => {
    return {
        items: state.items.listItem,
        activePage: state.items.activePage,
        totalPage: state.items.totalPage
    }
}

const mapDispatchToProps = (dispatch) => {
    //phát dữ liệu (dispatch)
    return {
        initLoad : (data) => {
            dispatch(actions.getListItem(data))
        },
        addNameContainer : (data) => {
            dispatch(actions.addNameAction(data))
        },
        deleteNameContainer:(data)=> {
            // console.log('cccccđ....',data);
            dispatch(actions.deleteNameAction(data))
        },
        updateNameContainer:(data)=> {
            // console.log('update....',data);
            dispatch(actions.updateNameAction(data))
        },
        searchbutom:(data)=> {
            // console.log('search.............',data);
            dispatch(actions.searchAction(data))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemPageContainer)