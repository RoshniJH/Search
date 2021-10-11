import React,{useState} from 'react';
import ReactAutocomplete from 'react-autocomplete';
import {useSearch, useDebounce, useSearchForm} from './hooks';
import Input from './Components/Inputs';
function App() {
   //const [value, setValue] = useState('');
   const {searchValue,onSearchChange} = useSearchForm();
   const {articles} = useSearch(useDebounce(searchValue));
   
  
  return (
    
    <ReactAutocomplete
      items={articles}
      renderInput={Input}
      inputProps={{placeholder:'Input a search term'}}
      getItemValue={item => item.label}
      renderMenu={(children,value,style ) => {
        return articles && articles.length ?
              (<div  style= {{...style}} className="input-suggestion">
                {children}
                <a href={`/search?query=${value}`} className="search-link">See all results</a>
              </div>
              ) : <></>;
      }}
      renderItem={(item, highlighted) =>
        <div
          key={item.id}
          style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
        >
          {item.label}
        </div>
      }
      value={searchValue}
      onChange={onSearchChange}
      
    />
   
  )
}

export default App;
