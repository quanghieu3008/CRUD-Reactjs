import React, { Component } from 'react'

// import NextHieu from './nexxtt'
let uuu='./img_1_.png'
class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            tensach: '',
            tentacgia:'',
            giaban:'',
            id: '',
           
           
        }
    }
   
    deleteComponent(id) {
        
        this.props.deleteNameContainer(id)
     
      
    }
    
    handleChange(item) {
        this.setState({
            id: item.id,
           
            tensach: item.tensach,
            tentacgia:item.tentacgia,
            giaban:item.giaban,
        })
    }
    addNameComponent() {
       
        
        this.props.addNameContainer({
            
            tensach: this.state.tensach,
            tentacgia:this.state.tentacgia,
            giaban:this.state.giaban,
        })
        this.setState({
            id: '',
            tensach: '',
            tentacgia:'',
            giaban:'',
        })
        
    }
    empty(){
        this.setState({
            tensach: '',
            tentacgia:'',
            giaban:'',  
        })
    }
    updateNameComponent() {
       
        this.props.updateNameContainer(this.state)
    }
    searchinput(even){
        this.setState({inputState:even.target.value})

    }
    searchbutom(){
        if(this.state.inputState)
        {
            this.props.searchbutom(this.state.inputState)
        }
    }
    changeText(){
        var checkBox = document.getElementById("idcheck");
        var text = document.getElementById("text");
        if (checkBox.checked == true){
          text.style.display = "block";
        } else {
           text.style.display = "none";
        }
      }
    
    render() {
        let listData = []
        if (this.props.items) {
            // console.log(items);
            
            listData = this.props.items.map((item, key) => {
                return (
                   <div className="khung1" key={key} >
                        <div > <div ><button  className="exit" onClick={() => this.deleteComponent(item.id)}>X??a</button></div>
                        {/* <div ><b>S??? Th??? t??? :</b>{item.id}</div> */}
                        <div id="text"><b>T??n S??ch :</b>{item.tensach}</div>
                        <div ><b>T??n T??c Gi??? :</b>{item.tentacgia}</div>
                        <div ><b>Gi?? B??n :</b>{item.giaban}<b>VND</b></div>
                         <div> <img className="imgg" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"></img></div>
                       
                       <a href="#"><button className="www" onClick={() => this.handleChange(item)}>S???a</button></a></div>
                       <input type="checkbox" id="idCheck"  onclick={()=>this.changeText()}/>
                    
                    </div>
                   
                    
                )
            })  
        }
        return (    
            <div className="">
                
                <div>
                 
                  

                    <div><input  placeholder="T??n s??ch" value={this.state.tensach} onChange={(e) => { this.setState({ tensach: e.target.value }) }}></input>
                    <button onClick={()=> this.empty()}>????? r???ng</button>
                    </div>
                    <div><input  placeholder="T??n t??c gi???" value={this.state.tentacgia} onChange={(e) => { this.setState({ tentacgia: e.target.value }) }}></input></div>
                    <div><input type="number" min="10000"  placeholder="Gi?? b??n" value={this.state.giaban} onChange={(e) => { this.setState({ giaban: e.target.value }) }}></input></div>
                    <button className="www" onClick={() => this.addNameComponent()}>Th??m</button>
                    <button className="www" onClick={() => this.updateNameComponent()}>S???a</button>
                    <div><input placeholder="T??m Ki???m" value={this.state.inputState} onChange={(e)=> {this.searchinput(e)}}></input>
                    <button className="www" onClick={() => this.searchbutom()}>Search</button></div>
                </div>
                <div className="ngang">
        {listData}ccccc
                </div>
            </div>
        )
    }
}
export default Items;









 // inputState:'',
            // isShowform: true
    
    
            // showForm = () => {
    //     // console.log("123");
    //     this.setState({
    //         isShowform: false
    //     })
    // }
    // showForm2 = () => {
    //     this.setState({
    //         isShowform:true
    //     })
    // }
             {/* <div>
                <div>
                    
                    <button onClick={this.showForm2}  >????ng K??</button>
                    <button onClick={this.showForm} >????ng</button>
                </div>
                { this.state.isShowform ?< NextHieu {...this.props} /> : 
        <div></div>
                }
            </div> */}