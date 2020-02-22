import React, { Component} from 'react'
import Notes from "./notes"
import {withoutIndex} from "./utils.js"
import Header from "./Header.js"

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
          func: [
              'Приветствуем, что бы добавить план напишите текст и нажмите  "Save" '
          ]
      }

    }
    onNoteDelete = indexToRemove => {
        this.setState(oldState => {
            return {
                func: withoutIndex(oldState.func, indexToRemove)
            }
        })
    }
    onNoteCreate = newNoteText => {
        this.setState(oldState => {
            return {
                func: [newNoteText].concat(oldState.func)
            }
        })
    }
    render() {
        return  ( <div>
            <Header/>
             <Notes func={this.state.func} 
        onDelete={this.onNoteDelete}
        onCreate={this.onNoteCreate}/> 
        </div>
        )
    
    }
}


export default App
