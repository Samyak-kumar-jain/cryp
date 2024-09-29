import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Select.css"

export default function Selectd({days, handleDaysChange}) {
  

  return (
    <div className= "select-days" sx={{ minWidth: 120 }}>
        <p>Price change in</p>
     
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
         sx={{
            height: "2.5rem",
            color: "var(--gold)",
            // position:"absolute",
            // left:"16rem",
            // top:"16rem",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--gold)",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "var(--gold)",
              },
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
            <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
      
    </div>
  );
}
