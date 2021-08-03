import React from 'react';
import Accordion2 from "./Accordion2";
function SecAccord() {
    const data = [
        {
            title: 'Question 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et '

        },{
            title: 'Question 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
                'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali'
        },{
            title: 'Question 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
                'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali Ut enim ad minim veniam, quis nostrud exercitation' +
                ' ullamco laboris nisi ut ali Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali'
        },]
    return (
        <div>
                 {
                     data.map((data)=>(
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