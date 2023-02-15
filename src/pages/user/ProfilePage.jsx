import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import { Input, Select } from '../../components/forms/';
import { getGeneration } from '../../utils/user';

const ProfilePage = ({ userData, divisi }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const toHome = () => navigate('/');

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return (
    <>
      <h1 className='text-xl'>Ubah Profil</h1>
      <form
        // onSubmit={submitHandler}
        method='POST'
        encType='multipart/form-data'
      >
        <div className='mt-3 grid grid-cols-12 gap-3'>
          {/* Thumbnail */}
          <div className='col-span-12'>
            <label
              htmlFor='thumbnail'
              className='block text-sm font-medium text-primary'
            >
              Foto Profil
            </label>
            <input
              // onChange={inputImgHandler}
              type='file'
              id='thumbnail'
              name='thumbnail'
              accept='image/*'
              className='mt-1'
            />
          </div>

          {/* Nama */}
          <div className='col-span-12'>
            <Input
              // onChange={inputTitleHandler}
              label='Nama Lengkap'
              value={user?.fullName}
              placeholder='Masukkan nama lengkap'
              required
            />
          </div>

          {/* Username */}
          <div className='col-span-12 sm:col-span-6'>
            <Input
              // onChange={inputTitleHandler}
              label='Username'
              value={user?.username}
              placeholder='Masukkan username'
              required
            />
          </div>

          {/* Email */}
          <div className='col-span-12 sm:col-span-6'>
            <Input
              // onChange={inputTitleHandler}
              label='Email'
              type='email'
              value={user?.email}
              placeholder='Masukkan alamat email'
              required
            />
          </div>

          {/* Password */}
          <div className='col-span-12 sm:col-span-6'>
            <Input
              // onChange={inputTitleHandler}
              label='Password'
              type='password'
              value={user?.password}
              placeholder='Masukkan password'
              required
            />
          </div>

          {/* No. Telepon */}
          <div className='col-span-12 sm:col-span-6'>
            <Input
              // onChange={inputTitleHandler}
              label='Nomor Telepon'
              value={user?.phoneNumber}
              placeholder='Masukkan nomor telepon'
              required
            />
          </div>

          {/* Divisi */}
          <div className='col-span-12 sm:col-span-6 lg:col-span-3'>
            <Select
              // onChange={inputDivHandler}
              label='Divisi'
              value={user?.id_division}
            >
              {divisi.map(({ id, divisionName }) => (
                <option key={id} value={id}>
                  {divisionName}
                </option>
              ))}
            </Select>
          </div>

          {/* Angkatan */}
          <div className='col-span-12 sm:col-span-6 md:col-span-3'>
            <Select
              // onChange={inputDivHandler}
              label='Angkatan'
              value={user?.generation}
            >
              <option value='0' hidden>
                Angkatan
              </option>
              {getGeneration().map((gen) => (
                <option key={gen} value={gen}>
                  {gen}
                </option>
              ))}
            </Select>
          </div>

          <div className='hidden sm:block sm:col-span-full'></div>

          {/* Submit & Back button */}
          <div className='mt-6 col-span-12 sm:col-span-2 sm:col-start-9'>
            <Button onClick={toHome} type='submit' color='gray'>
              Kembali
            </Button>
          </div>
          <div className='sm:mt-6 col-span-12 sm:col-span-2 sm:col-start-11'>
            <Button type='submit'>Simpan</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProfilePage;