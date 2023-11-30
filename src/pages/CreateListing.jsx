import React, { useState } from 'react';

function CreateListing() {
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: '',
    description: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;
  function onChange() {}
  return (
    <main className='max-w-md px-2 mx-auto'>
      <h1 className='text-3xl text-center mt-6'>Create a Listing</h1>
      <form className='mb-6'>
        <p className='text-lg mt-6 font-semibold'>Sell or Rent</p>

        <div className='flex'>
          <button
            onClick={onChange}
            type='button'
            id='type'
            value='sale'
            className={` mr-3 py-3 px-7 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === 'rent'
                ? 'bg-white text-black'
                : 'bg-slate-600 text-white'
            }`}
          >
            Sell
          </button>
          <button
            onClick={onChange}
            type='button'
            id='type'
            value='rent'
            className={` ml-3 py-3 px-7 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === 'sale'
                ? 'bg-white text-black'
                : 'bg-slate-600 text-white'
            }`}
          >
            rent
          </button>
        </div>
        <p className='text-lg mt-6 font-semibold'>Name</p>
        <input
          type='text'
          id='name'
          value={name}
          onChange={onChange}
          placeholder='Name'
          maxLength='32'
          minLength='10'
          required
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 rounded'
        />
        <div className='flex space-x-6 mb-6 mt-6'>
          <div>
            <p className='text-lg font-semibold'>Beds</p>
            <input
              type='number'
              id='beds'
              value={bedrooms}
              onChange={onChange}
              min='1'
              max='50'
              required
              className=' w-full px-4 py-2 text-lg   text-gray-700 bg-white border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 rounded'
            />
          </div>
          <div>
            <p className='text-lg font-semibold'>Baths</p>
            <input
              type='number'
              id='beds'
              value={bathrooms}
              onChange={onChange}
              min='1'
              max='50'
              required
              className=' w-full px-4 py-2 text-lg   text-gray-700 bg-white border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 rounded'
            />
          </div>
        </div>
        <p className='text-lg mt-6 font-semibold'>Parking Spots</p>

        <div className='flex'>
          <button
            onClick={onChange}
            type='button'
            id='parking'
            value='true'
            className={` mr-3 py-3 px-7 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            Yes
          </button>
          <button
            onClick={onChange}
            type='button'
            id='parking'
            value='false'
            className={` ml-3 py-3 px-7 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            No
          </button>
        </div>
        <p className='text-lg mt-6 font-semibold'>Furnished</p>

        <div className='flex'>
          <button
            onClick={onChange}
            type='button'
            id='furnished'
            value='true'
            className={` mr-3 py-3 px-7 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            Yes
          </button>
          <button
            onClick={onChange}
            type='button'
            id='furnished'
            value='false'
            className={` ml-3 py-3 px-7 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            No
          </button>
        </div>
        <p className='text-lg mt-6 font-semibold'>Name</p>
        <textarea
          type='text'
          id='address'
          value={address}
          onChange={onChange}
          placeholder='Address'
          required
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 rounded'
        />
        <p className='text-lg mt-6 font-semibold'>Description</p>
        <textarea
          type='text'
          id='description'
          value={description}
          onChange={onChange}
          placeholder='Description'
          required
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 transition duration-150 ease-in-out focus:first-letter:text-gray-700 focus:bg-white focus:border-slate-600 rounded'
        />

        <p className='text-lg mt-6 font-semibold'>Offer</p>
        <div className='flex'>
          <button
            onClick={onChange}
            type='button'
            id='offer'
            value='true'
            className={` mr-3 py-3 px-7 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            Yes
          </button>
          <button
            onClick={onChange}
            type='button'
            id='offer'
            value={regularPrice}
            className={` ml-3 py-3 px-7 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            No
          </button>
        </div>
        <div className='flex items-center mb-6 mt-6'>
          <div className=''>
            <p className='text-lg font-semibold'>Regular Price</p>
            <div className='flex justify-center items-center w-full space-x-6'>
              <input
                type='number'
                id='regularPrice'
                value={regularPrice}
                onChange={onChange}
                min='50'
                max='40000000'
                required
                className='w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
              />
              {type === 'rent' && (
                <div>
                  <p className='text-md w-full whitespace-nowrap'>$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className='flex items-center mb-6 mt-6'>
            <div className=''>
              <p className='text-lg font-semibold'>Discounted Price</p>
              <div className='flex justify-center items-center w-full space-x-6'>
                <input
                  type='number'
                  id='discountedPrice'
                  value={discountedPrice}
                  onChange={onChange}
                  min='50'
                  max='40000000'
                  required={offer}
                  className='w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                />
                {type === 'rent' && (
                  <div>
                    <p className='text-md w-full whitespace-nowrap'>
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className='mb-6'>
          <p className='text-lg font-semibold'> Images</p>
          <p className='text-gray-600 '>
            The fist image will be the cover (max 6)
          </p>
          <input
            type='file'
            id='images'
            onChange={onChange}
            accept='.jpg, .png, .jpeg'
            multiple
            required
            className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:bg-white focus:border-slate-600'
          />
        </div>
        <button
          type='submit'
          className='w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          {' '}
          Create Listing
        </button>
      </form>
    </main>
  );
}

export default CreateListing;
