import React from 'react'
import '../../pages/profile/profile.scss'
import itemBille from '../../assets/bille.png'
import itemCel from '../../assets/cel.png'
import itemNoti from '../../assets/not.png'
import itemUbi from '../../assets/ubi.png'
import itemProfile from '../../assets/profile.png'
import itemWorld from '../../assets/world.png'
import itemNext from '../../assets/next.png'
import itemPre from '../../assets/preguntas.png'
import itemProfileImg from '../../assets/Profile img.png'
import itemPencil from '../../assets/pencil.png'

import { useState, useEffect } from 'react'
import EditProfile from '../editProfile/editProfile'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'

function Profile() {
    const [display, setDisplay] = useState(true);
    const [storedValue, setStoredValue] = useState('Jenny Wilson');
    useEffect(() => {
        const storedData = localStorage.getItem('Nombre');
        if (storedData) {
          setStoredValue(storedData);
          console.log ('localStorage', storedValue)
        }
      }, [display]);
    const handleDisplay=()=>{
        setDisplay(!display)
        console.log('Funciona :)', display)
    }

    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(startLogout());
    }
    
    if (display){
        return (
            <div className='profile-container'>
        
                <div className='container-item-photo'>
                <img className='photo' src={itemProfileImg} alt="" />
                <p>{storedValue}</p>
              </div>
        
              <div className='container-item' onClick={handleDisplay}>
                <img className='item' src={itemProfile} alt="" />
                <p>Account edit</p>
                <img className='item2' src={itemNext} alt="" />
              </div>
        
              <div className='container-item'>
                <img className='item' src={itemNoti} alt="" />
                <p>Account edit</p>
                <img className='item2' src={itemNext} alt="" />
              </div>
        
              <div className='container-item'>
                <img className='item' src={itemBille} alt="" />
                <p>Payment</p>
                <img className='item2' src={itemNext} alt="" />
              </div>
        
              <div className='container-item'>
                <img className='item' src={itemWorld} alt="" />
                <p>Language</p>
                <img className='item2' src={itemNext} alt="" />
              </div>
        
              <div className='container-item'>
                <img className='item' src={itemUbi} alt="" />
                <p>Location</p>
                <img className='item2' src={itemNext} alt="" />
              </div>
        
              <div className='container-item'>
                <img className='item' src={itemPre} alt="" />
                <p>FAQ</p>
                <img className='item2' src={itemNext} alt="" />
              </div>
        
              <div className='container-item'>
                <img className='item' src={itemCel} alt="" />
                <p>Support</p>
                <img className='item2' src={itemNext} alt="" />
              </div>
              <div className='container-item' onClick={handleLogout}>
                
                <p className='logOut' >LogOut</p>
              
              </div>
            </div>
            
          )
    } else {
        return (<EditProfile display={handleDisplay} />)
    }
  
}

export default Profile
