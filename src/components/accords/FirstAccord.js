import React, {useState}from 'react';
import Accordion1 from "./Accordion1";
import Data from "../data/Data";
function FirstAccord() {
    const [isOpened, setOpened]=useState(null);
const data = new Data();
    const toggleAccordionOpened = (accordion)=>{
        if (isOpened===accordion){
            setOpened(null)
        }else{
            setOpened(accordion)
        }
    }
    return (
       <div>
            {
                data.data.map((data)=>(

                    <Accordion1
                        isOpened={isOpened}
                        setOpened={toggleAccordionOpened}
                        title={data.title}
                        content={data.content}

                    />


                ))
            }
        </div>

    );
}

export default FirstAccord;