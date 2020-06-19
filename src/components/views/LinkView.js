import React from 'react';
import { Paper, Switch } from "@material-ui/core";

const LinkView = (props) => {
    return (<Paper className="link-container">
        <div className="logo-img">
            <img src="https://via.placeholder.com/150" alt=""/>
        </div>
        <div className="link-inputs">
            <div className="link-title-container">
                <input type="text" placeholder="Enter title"/>
            </div>
            <div className="link-url-container">
                <input type="text" placeholder="http://url"/>
            </div>
        </div>
        <div className="option-buttons">
            <div className="link-enable-switch">
                <Switch
                    name="checkedB"
                    color="primary"
                />
            </div>
        </div>
    </Paper>)
}
export default LinkView;