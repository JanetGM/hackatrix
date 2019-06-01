import React, {Component} from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import Push from 'push.js';




class Notification extends Component {
   constructor(){
   super();
   this.state = {
   dataActual:[],
  

    }
   }

    componentWillMount(){
       db.collection("user").onSnapshot((snap) => {
        const data = [];
        const report =[];
        const reportEspecific ='';

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
        
        Push.create("BARRANCO", {
            body: "Accidente de transito",
            timeout: 4000,
            onClick: function () {
                window.focus();
                this.close();
            }
        });
    }


    notificationSpecificIncident(){
        const arrayDeDatos = this.state.dataActual;
       const datoEspecifico =  arrayDeDatos.filter(obj => console.log(obj.specific_incident));
       console.log(datoEspecifico);
    }



  render() {
     

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

    </div>
    );
  }
}

export default Notification;