import React, {Component} from "react";
import '../test/Ccomponent.css';
import FirstAccord from "../components/accords/FirstAccord";
import SecAccord from "../components/accords/SecAccord";

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

        return (
            this.state.click? <div>
                <FirstAccord/>

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
            </div>:<div>
                <SecAccord/>

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


