import { useRef, useState } from 'react';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';
import { Link } from 'react-router-dom';

const JoinCrewForm = () => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [dragOver, setDragOver] = useState(false);

  const onFilePick = (e) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };
  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    // Put dropped file into the real input so the form posts it to Web3Forms
    const dt = new DataTransfer();
    dt.items.add(file);
    if (inputRef.current) {
      inputRef.current.files = dt.files;
    }
    setFileName(file.name);
  };

  const clearFile = () => {
    if (inputRef.current) inputRef.current.value = null;
    setFileName('');
  };

  return (
    <Wrapper className='contact-section'>
      <div className='container'>
        <Link className='btn-container' to='/contact'>
          <button className='back-btn'>go back &rarr;</button>
        </Link>
        <h2 className='form-title'>wanna be a part of the crew?</h2>

        <form
          className='contact-form'
          action='https://api.web3forms.com/submit'
          method='POST'
          encType='multipart/form-data'
        >
          <input
            type='hidden'
            name='access_key'
            value='ee1fbee7-4e02-4817-9ac5-c090294e2761'
          />

          <div className='left-fields'>
            <input
              type='text'
              name='fullName'
              placeholder='FULL NAME*'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='EMAIL ADDRESS*'
              required
            />
            <input
              type='tel'
              name='phone'
              placeholder='MOBILE NUMBER*'
              required
            />
          </div>

          <div className='right-fields'>
            {/* Drag & drop upload box */}
            <label
              htmlFor='cvUpload'
              className={`file-upload-box ${dragOver ? 'drag-over' : ''}`}
              onDragEnter={onDragEnter}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              <input
                ref={inputRef}
                id='cvUpload'
                name='cv'
                type='file'
                accept='.pdf,.doc,.docx'
                onChange={onFilePick}
                aria-label='Upload your CV'
              />
              <span className='file-upload-text'>
                {fileName ? 'File selected' : 'Choose a file or drag it here'}
              </span>
            </label>

            {/* Filename preview + remove */}
            {fileName && (
              <div className='file-meta'>
                <span className='file-name'>{fileName}</span>
                <button
                  type='button'
                  className='file-remove'
                  onClick={clearFile}
                >
                  Remove
                </button>
              </div>
            )}

            <button className='btn' type='submit'>
              SEND
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default JoinCrewForm;
