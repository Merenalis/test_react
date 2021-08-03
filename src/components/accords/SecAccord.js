import React from 'react';
import Accordion2 from "./Accordion2";
import Data from "../data/Data";
const data = new Data();

function SecAccord() {

    return (
        <div>
                 {
                     data.data.map((data)=>(
                         <Accordion2
                             title={data.title}
                             content={data.content}
                         />

                     ))
                 }
             </div>

    );





}

export default SecAccord;