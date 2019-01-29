import React, { Component } from 'react';

import Hijo from './Hijo';
import ModalG from './ModalG';
class Padre extends Component{

   render(){
       return (
                 <Hijo/>
                 <Hijo/>
                 <Hijo/>
                 <Hijo/>
                 <Hijo/>
                 <ModalG/>
                <div></div>
       );
   } 
}

export default Padre;