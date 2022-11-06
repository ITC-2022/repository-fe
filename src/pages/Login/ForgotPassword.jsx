import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonIconNone } from '../../components/buttons/Button';
import Input from '../../components/inputForm/Input';

const ForgotPassword = () => {
  return (
    <>
      <h1 className='mt-4 h2-sm sm:h2-md'>Lupa Kata Sandi</h1>
      <form className='mt-2 flex flex-col gap-3' method='POST'>
        <Input
          inputType='email'
          styleType='secondary'
          label='Email'
          placeholder='Masukkan alamat email'
        />
        <section className='mt-4 w-full'>
          <ButtonIconNone text='Kirim' />
        </section>
      </form>
      <div className='mt-2.5 text-center'>
        <Link to='/login'>
          <p className='text-primary'>Kembali ke menu utama</p>
        </Link>
      </div>
    </>
  );
};

export default ForgotPassword;
