import React from "react";

// MATERIAL UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Navbar extends React.Component {
    state = {};
    render() {
        return (
             <div> 
                 <AppBar position="static">
                    <Toolbar>
                        Nome do app
                    </Toolbar>
                 </AppBar>
             </div>
        );
    }
}

export default Navbar;