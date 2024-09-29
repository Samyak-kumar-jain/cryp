import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function PriceType({PriceType,handlePriceTypeChange}) {
  

 

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "1.5rem",
    }}>
    <ToggleButtonGroup
      value={PriceType}
      exclusive
      onChange={handlePriceTypeChange}
      aria-label="text alignment"
      sx={{
        "&.Mui-selected": {
          color: "var(--gold) !important",
        },
        borderColor: "var(--gold)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--gold)!important",
          borderColor: "unset",
          color: "var(--gold) !important ",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--gold) !important",
        },
      }}
    >
      <ToggleButton value="prices" >
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" >
        Market Cap 
      </ToggleButton>
      <ToggleButton value="total_volumes" >
        Total Volume
      </ToggleButton>
     
    </ToggleButtonGroup>
    </div>
  );
}
