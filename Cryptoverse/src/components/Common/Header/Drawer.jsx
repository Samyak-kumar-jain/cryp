import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import { useState } from 'react';

export default function AnchorTemporaryDrawer() {
 

  const [open,setOpen] = useState(false);
  

  return (
    <div>
     
          <Button onClick={()=>setOpen(true)}>
            <MenuIcon className='link'/>
          </Button>
          <Drawer
          anchor = {"right"}
            
            open={open}
            onClose={()=>setOpen(false)}
          >
           <div className='drwaer-div'>
           <a href="/">
                    <p className='link'>Home</p>
                </a>
                <a href="/">
                    <p className='link'>compare</p>
                </a>
                <a href="/">
                    <p className='link'>Watchlist</p>
                </a>
                <a href="/">
                    <p className='link'>Dashboard</p>
                </a>
           </div>
          </Drawer>
        
     
    </div>
  );
}