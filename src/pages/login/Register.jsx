/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { api } from '../../api/api';

// Components
import Input from '../../components/inputForm/Input';
import Button from '../../components/buttons/Button';
import { Select } from '../../components/inputForm/SelectOption';

const Register = ({ divisi }) => {
  const navigate = useNavigate();
  const initialState = {
    username: '',
    fullName: '',
    email: '',
    password: '',
    id_division: 1,
  };
  const [errMessage, setErrMessage] = useOutletContext();
  const [inputData, setInputData] = useState(initialState);

  const inputHandler = (e, key) => {
    setInputData((prev) => ({ ...prev, [key]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const id_division = parseInt(inputData.id_division);
      const data = { ...inputData, id_division: id_division };
      const response = await api.post('/user/register', data);

      setErrMessage('Akun anda berhasil dibuat, silakan login.');
      setInputData(initialState);
      if (response) {
        navigate('/login');
      }
    } catch (err) {
      setErrMessage(`Error: ${err.response.data.message}!`);
    }
  };

  useEffect(() => {
    setErrMessage('');
  }, []);

  return (
    <>
      <h1 className='mt-4 text-xl sm:text-2xl'>Daftar</h1>
      {errMessage && (
        <div className='mt-2 mb-4 py-2 px-4 bg-danger-sub text-danger-main rounded-md w-max max-w-full'>
          {errMessage}
        </div>
      )}
      <form onSubmit={submitHandler} className='mt-1.5 flex flex-col gap-3'>
        <div>
          <Input
            onChange={(e) => inputHandler(e, 'fullName')}
            label='Nama'
            value={inputData.nama}
            color='secondary'
            placeholder='Masukkan nama'
          />
        </div>
        <div>
          <Input
            onChange={(e) => inputHandler(e, 'username')}
            label='Username'
            value={inputData.username}
            color='secondary'
            placeholder='Masukkan username'
          />
        </div>
        <div>
          <Input
            onChange={(e) => inputHandler(e, 'email')}
            label='Email'
            type='email'
            value={inputData.email}
            color='secondary'
            placeholder='Masukkan alamat email'
          />
        </div>
        <div>
          <Input
            onChange={(e) => inputHandler(e, 'password')}
            label='Password'
            type='password'
            value={inputData.password}
            color='secondary'
            placeholder='Masukkan password'
          />
        </div>
        <div className='flex flex-col gap-1 sm:w-2/5'>
          <Select
            onChange={(e) => inputHandler(e, 'id_division')}
            color='secondary'
            label='Divisi'
            value={inputData.id_division}
          >
            {divisi.map(({ id, divisionName }) => (
              <option className='bg-white' key={id} value={id}>
                {divisionName}
              </option>
            ))}
          </Select>
        </div>
        <section className='mt-4 w-full'>
          <Button type='submit'>Daftar</Button>
        </section>
      </form>
      <div className='mt-2.5 text-center'>
        <p className='text-gray-dark'>
          Sudah mempunyai akun?
          <span className='ml-1 text-primary underline'>
            <Link to='/login'>Masuk</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Register;
