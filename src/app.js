import { useState, useEffect } from 'react';
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
  const [headers, setHeaders] = useState(null);

  useEffect(() => {
    console.log('Hope this works')
      // if using request params to make api request use it here
  }, [])
  const handleApi = async (url, method='GET') => {

    let callData = await axios({
      method: method,
      url: url,
    })
    let params = {
      url,
      method
    }
    setData(callData.data.results);
    setRequestParams(params);
    setHeaders(callData.headers);
  }

    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={handleApi} />
        <Results data={data} headers={headers}/>
        <Footer />
      </>
    );
}

export default App;
