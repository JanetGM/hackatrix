import React, {Component} from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import Push from 'push.js';




class Notification extends Component {
   constructor(){
   super();
   this.state = {
   dataActual:[],
   dataAnterior:[]
    }
   }

    componentWillMount(){
       db.collection("user").onSnapshot((snap) => {
        const data = [];
            snap.forEach((doc) => {
            
            data.push({
                id: doc.id,
                ...doc.data(),
                });
            });
                this.setState({
                dataActual:data,
                
            });
                    });
 
    }


    notificationfuncion(){
        Push.create("Hello Mali!", {
            body: "Estas ahi beibi??",
            icon: '/icon.png',
            timeout: 4000,
            onClick: function () {
                window.focus();
                this.close();
            }
        });
    }



  render() {
  


console.log(this.state.dataActual)
    const ButtonNotificacion= styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;


    return (
    <div>
      <ButtonNotificacion 
      className="Button"
      onClick={this.notificationfuncion}>
        Notificacion
      </ButtonNotificacion>

      <ButtonNotificacion 
      className="Button">
        ConsultarData
      </ButtonNotificacion>
      
    </div>
    );
  }
}

export default Notification;