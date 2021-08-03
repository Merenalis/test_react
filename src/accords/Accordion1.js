import React from 'react';
function Accordion1({title,content,isOpened,setOpened}) {

    return (
        <div>
            <div className="accordion">
                <div onClick={()=>setOpened(title)}
                     className="accordion-header">
                    <h2>{title}</h2>
                    <div className="accordion-indicator">
                        {title===isOpened ? '-' : '+'}

                    </div>
                </div>
                {
                    title===isOpened &&(
                        <div className="accordion-body">
                            {content}
                        </div>
                    )
                }
            </div>
        </div>
    );

}

export default Accordion1;