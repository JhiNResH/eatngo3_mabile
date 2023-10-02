import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { TextField, Paper, MenuItem } from '@material-ui/core';
import { usePlacesAutocomplete, useGeocode } from 'react-places-autocomplete';
import { MapContainer, TileLayer } from 'react-leaflet';
import useStyles from './styles';

function SearchBar() {
    const classes = useStyles();
    const [address, setAddress] = React.useState('');
    const [selectedAddress, setSelectedAddress] = React.useState(null);
    const { suggestions, setValue, clearSuggestions } = usePlacesAutocomplete({
        debounce: 300,
    });
    const { loading, geocode } = useGeocode({
        apiKey: 'YOUR_API_KEY',
    });

    const handleSelect = async (value) => {
        setValue(value, false);
        clearSuggestions();
        setAddress(value);
        setSelectedAddress(null);
        const results = await geocode({ address: value });
        if (results.length > 0) {
            setSelectedAddress(results[0]);
        }
    };

    return (
        <TextField
            label="Search"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onFocus={() => clearSuggestions()}
            className={classes.input}
            InputProps={{
                endAdornment: (
                    <Paper className={classes.paper}>
                        {loading && <MenuItem disabled>Loading...</MenuItem>}
                        {suggestions.map((suggestion) => (
                            <MenuItem
                                key={suggestion.place_id}
                                onClick={() => handleSelect(suggestion.description)}
                                className={classes.menuItem}
                            >
                                {suggestion.description}
                            </MenuItem>
                        ))}
                    </Paper>
                ),
            }}
        />
    );
}

function CustomToolbar() {
    const classes = useStyles();
    const apiKey = 'YOUR_API_KEY';
    const url = `https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${apiKey}`;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        My App
                    </Typography>
                    <SearchBar />
                </Toolbar>
            </AppBar>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh' }}>
                <TileLayer url={url} attribution="Google Maps" />
            </MapContainer>
        </div>
    );
}

export default CustomToolbar;