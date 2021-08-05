import React, {Component} from "react";
import "../styles/Switch.css";
import AccordMain from "./accords/AccordMain";

export default class SwitchComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            click: !state.click
        }));
    }
    render() {
        return (<div>         
             <AccordMain state={this.state.click}/>        
                <div className="switch-main">
                    <div className="switch-main__switch-text">
                        <span>1-st type</span>
                    </div>
                    <label className="switch-main__switch">
                        <input type="checkbox" onClick={this.handleClick}/>
                        <span className="switch-main__slider round"></span>
                    </label>
                    <div className="switch-main__switch-text">
                        <span>2-nd type</span>
                    </div>
                </div>
        </div>
        );
    }
}


