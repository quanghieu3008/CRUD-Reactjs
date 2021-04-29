// import React, { Component } from 'react';
//  class NextHieu extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             id: '',
            
//             inputState:'',
//         }
//     }
//     deleteComponent(id) {
        
//         this.props.deleteNameContainer(id)
//     }
//     handleChange(item) {
//         this.setState({
//             id:item.id,
//             name:item.name
//         })
//     }
//     addNameComponent() {
//         this.props.addNameContainer({
//             name: this.state.name,
//         })
//         this.setState({
//             id: '',
//             name: ''
//         })
        
//     }
//     updateNameComponent() {
       
//         this.props.updateNameContainer(this.state)
//     }
//     searchinput(even){
//         this.setState({inputState:even.target.value})

//     }
//     searchbutom(){
//         if(this.state.inputState)
//         {
//             this.props.searchbutom(this.state.inputState)
//         }

       
//     }
//      render(){
//         let listData = []
//         if (this.props.items) {
//             listData = this.props.items.map((item, key) => {
//                 return (
//                     <table>
//                         <body>
                     
//                     <tr key={key} onClick={() => this.handleChange(item)}>
                        
//                         <td className="aaa">{item.id}</td>
//                         <td className="sss">{item.name}</td>
//                         <td ><button className="www" onClick={() => this.deleteComponent(item.id)}>xoa</button></td>
                       
//                     </tr>
//                     </body>
//                     </table>
//                 )
//             })
//         }
//          return(
//              <div>
//                <button className="" onClick={() => this.updateNameComponent()}>sua</button>
//                <input className="" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }}></input>
//                     <button className="" onClick={() => this.addNameComponent()}>them</button>
//                     <button className="" onClick={() => this.updateNameComponent()}>sua</button>
//                     <input value={this.state.inputState} onChange={(e)=> {this.searchinput(e)}}></input>
//                     <button className="" onClick={() => this.searchbutom()}>tk</button>
//                     {/* {listData} */}
//              </div>
//          )
//      }
//  }
//  export default NextHieu