import { Alert, Button, Modal, TextInput } from 'flowbite-react'
import { useEffect, useRef, useState } from 'react'
import {useSelector} from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import {Link} from 'react-router-dom'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {updateStart, updateSuccess, updateFailure, deleteStart, deleteSuccess, deleteFailure, signoutSuccess} from '../redux/user/userSlice'
import {useDispatch} from 'react-redux'


export default function DashProfile() {
  const {currentUser, error, loading} = useSelector(state => state.user)
  const [imageFile, setImageFile] = useState(null)
  const [imageFileUrl, setImageFileUrl] = useState(null)
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null)
  const [imageFileUploadingError, setImageFileUploadingError] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null)
const [imageFileUploading, setImageFileUploading] = useState(null)
const [updateUserSuccess, setUpdateUserSuccess] = useState(null)
const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] =useState({})
  const filePickerRef = useRef();
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file= e.target.files[0]
    if(file){
      setImageFile(file)

      // Convert the image to url
      setImageFileUrl(URL.createObjectURL(file))
    }
  }

  useEffect(()=>{
    if(imageFile){
      uploadImage();
    }
  }, [imageFile])

  const uploadImage = async() => {
    setImageFileUploading(true)
    setImageFileUploadingError(null)
    const storage = getStorage(app)
    const fileName = new Date().getTime() + imageFile.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setImageFileUploadProgress(progress.toFixed(0))
    },
    (error) => {
      setImageFileUploadingError('Could not upload image (File must be less than 2MB)');
      setImageFileUploadProgress(null)
      setImageFile(null);
      setImageFileUrl(null);
      setImageFileUploading(false)
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImageFileUrl( downloadURL);
        setFormData({...formData, profilePicture: downloadURL})
        setImageFileUploading(false)
      });
    })
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setUpdateUserError(null)
    setUpdateUserSuccess(null)
    // Check if the all {} is empty
    if(Object.keys(formData).length === 0) {
      setUpdateUserError("No changes were made")
      return
    }
    if(imageFileUploading){
      setUpdateUserError("Please wait for the image to upload");
      return
    }
    try {
      dispatch(updateStart())
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(!res.ok){
        dispatch(updateFailure(data.message))
        setUpdateUserError(data.message)
      }else{
        dispatch(updateSuccess(data))
        setUpdateUserSuccess('user profile updated successfully')
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateUserError(error.message)
    }
  }

  const handleDeleteUser = async () => {
    setShowModal(false);
    try {
      dispatch(deleteStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(deleteFailure(data.message));
      } else {
        dispatch(deleteSuccess(data));
      }
    } catch (error) {
      dispatch(deleteFailure(error.message));
    }
  };

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='max-w-lg mx-auto p-3 w-full shadow-gray-400 bg-neutral-100 shadow-lg mt-3 mb-3  dark:bg-zinc-900 rounded-md'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input type='file' accept='image/*'  onChange={handleImageChange}  ref={filePickerRef} hidden/>
        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full relative' onClick={()=> filePickerRef.current.click()}>
          {
            imageFileUploadProgress && (
              <CircularProgressbar
              value={imageFileUploadProgress || 0}
              text={`${imageFileUploadProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62, 152, 199, ${
                    imageFileUploadProgress / 100
                  })`,
                },
              }}
            />
            )}
          <img src={imageFileUrl || currentUser.profilePicture} alt="user" className={`rounded-full w-full h-full border-8 border-blue-300 object-cover ${imageFileUploadProgress && imageFileUploadProgress < 100 && 'opacity-60'}`} />
        </div>
        {imageFileUploadingError && <Alert color='failure'>{imageFileUploadingError}</Alert>}
          <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} className='' onChange={handleChange}/>
          <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email} onChange={handleChange}/>
          <TextInput type='password' id='password' placeholder='password'  onChange={handleChange}/>
          <Button type='submit' gradientDuoTone='purpleToBlue' disabled={loading || imageFileUploading} pill>{loading ? 'Loading...' : 'Update'}</Button>
          {/* {
            currentUser && (
              <Link to={'/create-post'}>

              <Button type='button' gradientDuoTone='purpleToBlue' className='w-full'>Create post</Button>
              </Link>
            )
          } */}
      </form>
      <div className=' flex justify-between mt-4'>
        <span className='cursor-pointer text-red-500 hover:text-red-600 ' onClick={()=> setShowModal(true)}>Delete Account</span>
        <span className='cursor-pointer text-blue-500 hover:text-blue-600' onClick={handleSignout}>Sign Out</span>
      </div>
      {
        updateUserSuccess && (
          <Alert color='success' className='mt-4'>{updateUserSuccess}</Alert>
        )
      }
        {updateUserError && (
        <Alert color='failure' className='mt-5'>
          {updateUserError}
        </Alert>
      )}
      {error && (
        <Alert color='failure' className='mt-5'>
          {error}
        </Alert>
      )}
      <Modal show={showModal} onClose={()=> setShowModal(false)} popup size='md'>
        <Modal.Header/>
        <Modal.Body>
        <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete your account?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteUser}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)} pill>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
