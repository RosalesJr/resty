import { useState } from 'react';
import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');
  const [apiUrl, setApiUrl] = useState('');
  const [JSON, setJSON] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url: apiUrl,
      JSON,
    };
    props.handleApiCall(formData);
  };

  const handleMethod = (e) => {
    setMethod(e.target.id);
    setJSON('');
  }

  return (
    <>
      <div className='formBox'>
        <form onSubmit={handleSubmit} data-testid="submit">
          <label >
            <span>URL: </span>
            <input className="formInput" onChange={(e) => setApiUrl(e.target.value)} name='url' type='text' />
            <button className='allButtons' type="submit">GO!</button>
          </label>
          <textarea className="text-area-box" onChange={(e) => setJSON(e.target.value)} type="text" placeholder="PUT/POST JSON here"/>
          <label className="methods">
            <span className='spanButtons' id="get" onClick={handleMethod}>GET</span>
            <span className='spanButtons' id="post" onClick={handleMethod}>POST</span>
            <span className='spanButtons' id="put" onClick={handleMethod}>PUT</span>
            <span className='spanButtons' id="delete" onClick={handleMethod}>DELETE</span>
          </label>
        </form>
      </div>
    </>
  );
};


export default Form;
