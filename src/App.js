import React,{useState} from 'react';
import ReactAutocomplete from 'react-autocomplete';
import {useSearch, useDebounce} from './hooks';
import Input from './Components/Inputs';
function App() {
   const [value, setValue] = useState('');
   const {articles} = useSearch(useDebounce(value,500));
  //  useEffect(() => {
  //   axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${value}`)
  //   .then(function (response) {
  //     const parsedRespoonse = [];

  //     for (let i = 0; i < response.data[1].length; i++){
  //       parsedRespoonse.push({
  //         id: response.data[3][i],
  //         label: response.data[1][i]
  //       })
  //     }
  //     setItems(parsedRespoonse);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //  },[value]);..
  return (
    
    <ReactAutocomplete
      items={articles}
      renderInput={Input}
      shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
      getItemValue={item => item.label}
      renderItem={(item, highlighted) =>
        <div
          key={item.id}
          style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
        >
          {item.label}
        </div>
      }
      value={value}
      onChange={(e) => {setValue(e.target.value)}}
      onSelect={value =>setValue( value )}
    />
   
  )
}

export default App;
