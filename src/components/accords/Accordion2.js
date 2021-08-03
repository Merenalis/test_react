import React, {useState}from 'react';
function Accordion2({title,content}) {
    const [isOpened, setOpened]=useState(null);

    return (
        <div>
            <div className="accordion">
                <div onClick={()=>setOpened(!isOpened)}
                     className="accordion-header">
                    <h2>{title}</h2>
                    <div className="accordion-indicator">
                        {isOpened ? '-' : '+'}

                    </div>
                </div>
                {
                    isOpened &&(
                        <div className="accordion-body">
                            {content}
                        </div>
                    )
                }
            </div>
        </div>
    );

}

export default Accordion2;