import { useState } from 'react';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

function App(){
  const [data, setData ] = useState(null);
  const [requestParams, setRequestParams] = useState({});


  const handleApi = async (url, method='GET') => {

    let callData = await axios({
      method: method,
      url: url,
    })

    setData(callData.data.results);
    setRequestParams(requestParams);
  }
    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={handleApi} />
        <Results data={data} />
        <Footer />
      </>
    );
}

export default App;
