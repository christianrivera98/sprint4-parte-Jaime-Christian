import React, { useState } from 'react';
import '../../pages/editProfile/editProfile.scss';
import itemProfileImg from '../../assets/Profile img.png';
import itemPencil from '../../assets/pencil.png';

function EditProfile(props) {
  const [name, setName] = useState('Jenny Wilson');
  const [email, setEmail] = useState('jennywilson@gmail.com');
  const [phone, setPhone] = useState('+1 903 354 43 43');
  const [birthdate, setBirthdate] = useState('03.05.1995');
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    phone: false,
    birthdate: false,
  });

  const handleEditClick = (field) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleSaveClick = () => {
    // Aquí puedes implementar la lógica para guardar los datos editados.
    // Por ahora, solo vamos a imprimir los datos en la consola.
    localStorage.setItem('Nombre', name);
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Teléfono:', phone);
    console.log('Fecha de Nacimiento:', birthdate);

    // Desactivamos la edición
    setIsEditing({
      name: false,
      email: false,
      phone: false,
      birthdate: false,
    });
    props.display()
  };

  return (
    <div className='profile-container'>
      <div className='container-item-photo'>
        <p>Profile</p>
        <img className='photo' src={itemProfileImg} alt='' />
      </div>

      <div className='container-item'>
        {isEditing.name ? (
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <p>{name}</p>
        )}
        <button onClick={() => handleEditClick('name')}>
          <img className='item item1' src={itemPencil} alt='' />
        </button>
      </div>

      <div className='container-item'>
        {isEditing.email ? (
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <p>{email}</p>
        )}
        <button onClick={() => handleEditClick('email')}>
          <img className='item item2' src={itemPencil} alt='' />
        </button>
      </div>

      <div className='container-item'>
        {isEditing.phone ? (
          <input
            type='tel'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        ) : (
          <p>{phone}</p>
        )}
        <button onClick={() => handleEditClick('phone')}>
          <img className='item item3' src={itemPencil} alt='' />
        </button>
      </div>

      <div className='container-item'>
        {isEditing.birthdate ? (
          <input
            type='text'
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        ) : (
          <p>{birthdate}</p>
        )}
        <button onClick={() => handleEditClick('birthdate')}>
          <img className='item item4' src={itemPencil} alt='' />
        </button>
      </div>

      <button className='button-save' onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
}

export default EditProfile;

