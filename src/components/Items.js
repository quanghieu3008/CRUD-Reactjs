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
                        <div > <div ><button  className="exit" onClick={() => this.deleteComponent(item.id)}>Xóa</button></div>
                        {/* <div ><b>Số Thứ tự :</b>{item.id}</div> */}
                        <div id="text"><b>Tên Sách :</b>{item.tensach}</div>
                        <div ><b>Tên Tác Giả :</b>{item.tentacgia}</div>
                        <div ><b>Giá Bán :</b>{item.giaban}<b>VND</b></div>
                         <div> <img className="imgg" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"></img></div>
                       
                       <a href="#"><button className="www" onClick={() => this.handleChange(item)}>Sửa</button></a></div>
                       <input type="checkbox" id="idCheck"  onclick={()=>this.changeText()}/>
                    
                    </div>
                   
                    
                )
            })  
        }
        return (    
            <div className="">
                
                <div>
                 
                  

                    <div><input  placeholder="Tên sách" value={this.state.tensach} onChange={(e) => { this.setState({ tensach: e.target.value }) }}></input>
                    <button onClick={()=> this.empty()}>Để rỗng</button>
                    </div>
                    <div><input  placeholder="Tên tác giả" value={this.state.tentacgia} onChange={(e) => { this.setState({ tentacgia: e.target.value }) }}></input></div>
                    <div><input type="number" min="10000"  placeholder="Giá bán" value={this.state.giaban} onChange={(e) => { this.setState({ giaban: e.target.value }) }}></input></div>
                    <button className="www" onClick={() => this.addNameComponent()}>Thêm</button>
                    <button className="www" onClick={() => this.updateNameComponent()}>Sửa</button>
                    <div><input placeholder="Tìm Kiếm" value={this.state.inputState} onChange={(e)=> {this.searchinput(e)}}></input>
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
                    
                    <button onClick={this.showForm2}  >Đăng Ký</button>
                    <button onClick={this.showForm} >Đóng</button>
                </div>
                { this.state.isShowform ?< NextHieu {...this.props} /> : 
        <div></div>
                }
            </div> */}