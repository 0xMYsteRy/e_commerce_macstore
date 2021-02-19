import React from 'react';
import { Appbar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCard } from '@material-ui/icons';

import logo from '../../assets/commerce.png'

const Navbar = () => {
    return (
        <div>
            <Appbar position="fixed" className={classes.Appbar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={ } alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce.js
                    </Typography>
                </Toolbar>
            </Appbar>
        </div>
    )
}

export default Navbar
