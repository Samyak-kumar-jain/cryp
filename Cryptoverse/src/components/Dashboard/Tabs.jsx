import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { TabContext, TabPanel } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from './Grid/Grid';
import "./Tabs.css";
import List from './List/List';

const CustomTab = styled(Tab)(({ theme }) => ({
    color: 'white',
    fontSize: '1rem',
    '&.Mui-selected': {
        color: '#FFD700',
        fontSize: '1rem',
        borderBottom: `3px solid #FFD700`,
    },
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFD700',
        },
    },
});

export default function TabsComponent({ coins, currency, error, hasNoResults }) {
    const [value, setValue] = React.useState('grid');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <TabContext value={value}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="tabs example"
                        variant="fullWidth"
                        TabIndicatorProps={{ style: { display: 'none' } }}
                    >
                        <CustomTab label="Grid" value="grid" />
                        <CustomTab label="List" value="list" />
                    </Tabs>
                    <TabPanel value="grid">
                        {hasNoResults ? (
                            <p className="not-found">No results found</p>
                        ) : (
                            <div className='grid'>
                                {coins.map((item, i) => (
                                    <Grid
                                        coin={item}
                                        curr={currency}
                                        err={error}
                                        key={i}
                                    />
                                ))}
                            </div>
                        )}
                    </TabPanel>
                    <TabPanel value="list">
                        {hasNoResults ? (
                            <p className="not-found">No results found</p>
                        ) : (
                            <table className='list-table'>
                                <tbody>
                                    {coins.map((item, i) => (
                                        <List
                                            coin={item}
                                            curr={currency}
                                            err={error}
                                            key={i}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </TabPanel>
                </TabContext>
            </Box>
        </ThemeProvider>
    );
}
