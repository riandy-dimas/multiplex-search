import React, { Fragment } from 'react';
import { Box, Button, CheckBox, Grommet, Heading, TextInput } from 'grommet';
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
      <Box background='light-1' round='small' gap='small'>
        <TextInput
          placeholder="looking for.."
          value={value}
          onChange={event => onChange(event.target.value)}
        />
      </Box>
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

const SearchEngineList = (props) => {
  const { list, onChange, value } = props
  return (
    <Box margin={{ vertical: 'medium' }} pad={{ horizontal: 'small', bottom: 'small'}} background='light-1' round='small' elevation='xsmall' gap='xsmall'>
      <Heading level={4} margin='small'>Search Engine</Heading>
      {
        list.map((item, i) => <CheckBox
          key={i}
          checked={value.has(item.value)}
          label={item.label}
          onChange={() => {onChange(item.value)}}
        />)
      }
    </Box>
  )
}

const searchEngineList = [
  {
    label: 'Google',
    value: 'google'
  },
  {
    label: 'Duck Duck Go',
    value: 'duck2go'
  },
  {
    label: 'Bing',
    value: 'bing'
  },
]

class App extends React.Component {

  state = {
    query: '',
    searchEngine: new Set(['google'])
  }

  handleQueryChange = (text) => {
    this.setState({
      query: text
    })
  }

  handleSearchEngineChange = (value) => {
    const { searchEngine } = this.state
    let usedSearchEngine = searchEngine
    if (searchEngine.has(value)) {
      usedSearchEngine.delete(value)
    } else {
      usedSearchEngine.add(value)
    }
    this.setState({
      searchEngine: usedSearchEngine
    })
  }

  render () {
    const { query, searchEngine } = this.state
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
                justify='start'
                pad='small'
              >
              <SearchField 
                value={query} 
                onChange={(text) => { this.handleQueryChange(text) }}
                onSearchClick={() => { alert(`Search.. ${query}`) }} 
              />
              <SearchEngineList 
                list={searchEngineList}
                value={searchEngine}
                onChange={(value) => { this.handleSearchEngineChange(value) }}
              />
            </Box>
            <Box flex align='center' justify='center'>
              Main body
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
