import React from 'react';
import Tags from '../tags/Tags';
import { Icon } from '@iconify/react';

const MateriCard = ({ data, divisi, ...props }) => {
  console.log(data);
  let title =
    data?.title ||
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit Maecenas auctor arcu eu ipsum viverra';
  let author =
    data?.id_user + ' (Nunggu api buat get user detail)' || 'Muhammad Rafli';
  // let selectedDivisi = divisi.filter((div) => div.id === data.id_division)[0]
  //   ?.divisionName;
  let createdAt = data?.createdAt || '14/09/2021';
  let updatedAt = data?.updatedAt || '15/10/2022';

  return (
    <div className='bg-white shadow-md rounded-lg p-3 sm:p-4'>
      <div
        className='w-full h-40 max-h-80 bg-zinc-300 bg-cover rounded'
        // style={urk}
      ></div>
      <div className='flex flex-col gap-1 sm:gap-2 mt-3'>
        <div className='flex items-center justify-between gap-2'>
          <Tags id={data?.id_divisi} />
          <Icon icon='bx:dots-vertical-rounded' width='20' />
        </div>
        <p className='w-full font-medium clamp'>{title}</p>
        <div className='flex items-center gap-1.5 text-gray-dark'>
          <Icon icon='carbon:user-avatar-filled' width='20' />
          <span className='text-sm'>{author}</span>
        </div>
        <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2'>
          <div className='flex items-center gap-1.5 text-gray-dark'>
            <Icon icon='ic:round-date-range' width='20' />
            <span className='text-sm'>{createdAt}</span>
          </div>
          <span className='hidden sm:inline'>|</span>
          <div className='flex items-center gap-1.5 text-gray-dark pl-0.5 sm:pl-0'>
            <Icon icon='fluent-mdl2:date-time-12' width='18' />
            <span className='text-sm'>{updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriCard;
