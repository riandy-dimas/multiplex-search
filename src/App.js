import React, { useState, useEffect, Fragment } from 'react';
import { Box, Button, Grommet, Heading, TextInput } from 'grommet';
import { Search } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

const SearchField = (props) => {
  const { value, onChange, onSearchClick } = props
  return (
    <Fragment>
      <TextInput
        placeholder="looking for.."
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      <Button
        icon={<Search />}
        label="Search!"
        fill="horizontal"
        margin="small"
        primary
        onClick={() => onSearchClick()}
      />
    </Fragment>
  );
}

function App() {
  const [query, setQuery] = useState('');

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>Multiplex Search</Heading>
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box
              width='small'
              background='light-2'
              elevation='small'
              align='center'
              justify='top'
              pad='small'
            >
            <SearchField 
              value={query} 
              onChange={(text) => { setQuery(text) }}
              onSearchClick={() => { alert(`Search.. ${query}`) }} />
          </Box>
          <Box flex align='center' justify='center'>
            Main body
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
