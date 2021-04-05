import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component {
    state = {
      search: '',
    };
  
    updateSearch = (search) => {
      this.setState({ search });
    };
  
    render() {
      const { search } = this.state;
  
      return (
        <SearchBar
          placeholder="Search Task"
          onChangeText={this.updateSearch}
          value={search}
          inputStyle={{backgroundColor: 'transparent'}}
          inputContainerStyle={{backgroundColor: '#2B49C3', borderRadius: 20}}
          containerStyle={{borderRadius: 20, paddingVertical: 1, marginTop:18, marginHorizontal: 8, borderStyle: 'dashed' }}
        />
      );
    }
  }

  const styles = StyleSheet.create({
      
  });
