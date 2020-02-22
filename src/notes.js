import React, { Component} from 'react'
import "./index.css"

class Note extends Component {
    render() {
    return <div className="Notes-Note">{this.props.text}
    <span className="Notes-Note-Delete" onClick={this.props.onDelete}>&times;</span>
    </div>
    }
}
class CreateNote extends Component {
    constructor (props){
        super(props)
        this.state = {
            text:""
        }
        this.inputRef = React.createRef()
    }
    onTextChange = (event) => {
        this.setState ({
            text: event.target.value
        })
    }
    onRecet = () => {
        this.setState ({
            text: ""
        })
        this.inputRef.current.focus ()
    }

    onSave = () => {
      //Если this.state.text = null | '' выводим Алерт
      if (
        this.state.text !== '' )
        {
          this.props.onCreate(this.state.text)
         this.onRecet ()

      }
      else {
    
    alert('Необходимо ввести хот что-то')

  }
}
    render() {
        return  <div className="Notes-Create Notes-Note">
            <textarea placeholder='Введите вашу заметку здесь'  ref={ this.inputRef } className="Notes-Create-Input" value={this.state.text} onChange={this.onTextChange}   ></textarea>
            <div className="Notes-Create-Buttons">
                <button className="Notes-Create-Button Notes-Create-Button-Create " type="submit" onClick={this.onSave} >Save</button>
                <button className="Notes-Create-Button Notes-Create-Button-Delete " type="submit" onClick={this.onRecet} >Delete</button>
            </div>
        </div>
  } }



class Notes extends Component {
    render() {
    return (
    <div className="Notes">
        <CreateNote onCreate={this.props.onCreate} />
        <hr />
        {this.props.func.map((text, index ) => {
            return <Note text={text} key={index} onDelete={()=> this.props.onDelete(index)} />
    }
        )
            }
    </div>
    )
  }
}


export default Notes
