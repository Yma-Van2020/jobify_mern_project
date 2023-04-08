import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //access the values stored in the state through the use of useAppContext hook
  const { isLoading, showAlert, displayAlert } = useAppContext();

  // global context and useNavigate later
  const handleChange = (e) => {
    console.log(e.target.name)
    setValues({...values, [e.target.name]:e.target.value})
    console.log(values)
  }

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values
    if(!email || !password || (!isMember && !name)){
      displayAlert()
      return;
    }  
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember? 'Login':'Register'}</h3>
        {showAlert && <Alert/>}

        {!values.isMember && <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>}

        <FormRow type="text" name="email" value={values.email} handleChange={handleChange}/>
        <FormRow type="text" name="password" value={values.password} handleChange={handleChange}/>
        <button type='submit' className='btn btn-block'>
            submit
        </button>
        <p>
          {values.isMember? 'Already a member?':'Not a member yet?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember? 'Register':'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register