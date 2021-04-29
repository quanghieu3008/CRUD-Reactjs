import React from 'react';
import './style.css'
import { Button } from 'react-bootstrap'
import ModalCommon from '../commons/ModalCommon'


class SlideHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      show: false,
      stateModal: '',
      objValue: {}
    };
  }

  handleShowAdd = () => { // hiển thị modle
    this.setState({
      show: true,
      //stateModal:'ADD'
    })
  }

  handleClose = () => { //out
    this.setState({
      show: false
    })
  }
  handleSubmit = (data) => { //save 
    this.setState({
      show: false
    })
    console.log('data modal:', data) //input props funtion to handle data of modal
    this.props.addSlide(data)
  };

  handleShowUpdate = (value) => {
    console.log("call here", value);
    this.setState({
      show: true,
      stateModal: "UPDATE",
      objValue: {
        id: value.id,
        title: value.title,
        description: value.description,
        image: {
          url: '',
          alt: ''
        }
      }
    })
  }

  render() {
    let listSlide = [
      {
        title: "slide 1",
        id: 1,
        description: "slide 1 trong 3",

        image: {
          url: "",
          alt: '',
        }
      },
      {
        title: "slide 2",
        id: 2,
        description: "slide 1 trong 3",
        image: {
          url: "",
          alt: '',
        }
      },
      {
        title: "slide 3",
        id: 3,
        description: "slide 1 trong 3",
        image: {
          url: "",
          alt: '',
        }
      },
    ]
    // const { listSlideBackground } = this.props
    if (this.props) {
      listSlide = listSlide.map((item, key) => {
        return (

          <tr>
            <td>{item.name}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
              <img src={item.url} height="50" width="50" />
            </td>
            <td>
              <Button variant="warning" onClick={() => this.handleShowUpdate(item)}>
                Update modal</Button>
            </td>
          </tr>

        )
      })
    }

    let defaultObjKey = { //input props
 
      title: {
        content: "Title:",
        type: "input"
      },
      description: {
        content: "Description:",
        type: "input"
      },

      image: {
        content: "Ảnh slide :",
        type: "file",
        alt: ''
      },
    
    }

    return (
      <div className="wrapTable">
        <div className="title">
          Danh sách Slide background
        </div>
        <div className="btnAdd">
          <Button variant="primary" onClick={this.handleShowAdd}>
            Thêm mới
    </Button>
          <ModalCommon
            parentName="ModalExample"
            show={this.state.show}
            stateModal={this.state.stateModal}
            handleClose={this.handleClose}
            handleSubmit={(data) => this.handleSubmit(data)}
            objKey={defaultObjKey}
            objValue={this.state.objValue}
            objState={
              { //input props
                title: "",
                description: "",
                
                image: {
                  url: "",
                  alt: ""
                },
             
              }
            }
          />
        </div>
        <div>
          <table class="table">
            <tbody>
              <tr>
                <th className="title">STT</th>
                <th className="title">Title</th>
                <th className="title">Description</th>
                <th className="title">Image</th>
                <th className="title">Action</th>
              </tr>

              {listSlide}
            </tbody>

          </table>
        </div>
      </div>
    );
  }
}
export default SlideHomePage;