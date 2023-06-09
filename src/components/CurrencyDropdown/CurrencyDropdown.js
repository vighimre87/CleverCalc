// React
import * as React from 'react';
import PropTypes from 'prop-types';

// Material UI libs
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function CurrencyDropdown(props) {
  
// useState hook and function for the Material UI Select components 
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        {/* Material UI Input component for the amount of money */}
        <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off">
            {/* set the input type as "number" */}
            <TextField type="number" label="Amount" variant="standard" value={props.amount} onChange={ (event) => props.onAmountChange(event.target.value)} />
        </Box>
        {/* Material UI Select component for the currency */}
        <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="currency-label">Currency</InputLabel>
                <Select
                labelId="currency-select-label"
                id="currency-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={props.currency}
                label="currency"
                onChange={(event) => props.onCurrencyChange(event.target.value)}
                >
                    <MenuItem value='USD'>US Dollar</MenuItem>
                    <MenuItem value='GBP'>British Pound</MenuItem>
                    <MenuItem value='EUR'>Euro</MenuItem>
                    <MenuItem value='JPY'>Japanese Yen</MenuItem>
                    <MenuItem value='CHF'>Swiss Franc</MenuItem>
                    <MenuItem value='AUD'>Australian Dollar</MenuItem>
                    </Select>
        </FormControl>
    </div>
  );
}

// Type validation of the props
CurrencyDropdown.propTypes ={
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}

export default CurrencyDropdown;