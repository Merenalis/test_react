import React, {useState}from 'react';
import Accordion1 from "./Accordion1";
import Data from "../data/Data";
import Accordion2 from "./Accordion2";
function AccordMain(props) {
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
                props.state ? <div>
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
                </div>: <div>
                    {
                        data.data.map((data)=>(
                            <Accordion2
                                title={data.title}
                                content={data.content}
                            />

                        ))
                    }
                </div>
            }


        </div>

    );
}

export default AccordMain;