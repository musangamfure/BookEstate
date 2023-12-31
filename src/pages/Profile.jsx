import { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { FcHome } from 'react-icons/fc';

function Profile() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  function onEdit() {}

  function handleChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function handleLogout() {
    auth.signOut();
    navigate('/');
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, { displayName: name });

        const docRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(docRef, { name });
      }

      toast.success('Profile is updated successfully!');
    } catch (error) {
      toast.error('Could not update the profile details');
    }
  }
  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            <input
              type='text'
              id='name'
              value={name}
              disabled={!changeDetail}
              onChange={handleChange}
              className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 ${
                changeDetail && 'bg-red-200 focus:bg-red-200'
              }`}
            />
            <input
              type='text'
              id='email'
              value={email}
              disabled={!changeDetail}
              onChange={handleChange}
              className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 ${
                changeDetail && 'bg-red-200 focus:bg-red-200'
              }`}
            />
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='flex items-center'>
                Do you want to change your name?{' '}
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevStste) => !prevStste);
                  }}
                  className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'
                >
                  {changeDetail ? 'Apply change' : 'Edit'}
                </span>
              </p>
              <p
                onClick={handleLogout}
                className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'
              >
                Sign Out
              </p>
            </div>
          </form>

          <button
            type='submit'
            className=' mt-6 w-full bg-blue-600 text-white uppercase py-3 px-7 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 '
          >
            <Link
              to='/create-listing'
              className='flex justify-center items-center'
            >
              <FcHome className='mr-2 text-3xl bg-red-200 rounded-full p-1 border-2' />
              Sell or Rent You Home
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
