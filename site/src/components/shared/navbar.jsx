import React from "react";

// MATERIAL UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from "@material-ui/core";

class Navbar extends React.Component {
    state = {};
    render() {
        return (
             <div> 
                 <AppBar position="static">
                    <Toolbar style={{backgroundColor: "#abeeff" ,justifyContent: "flex-end"}}> 
                        <IconButton>
                            <Avatar>G</Avatar>
                        </IconButton>
                        
                    </Toolbar>
                 </AppBar>
             </div>
        );
    }
}

export default Navbar;