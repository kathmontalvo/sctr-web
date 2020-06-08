import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Card from './Card';
import avatarUser from '../../assets/static/img_avatar.png';
import '../../assets/styles/components/Modal.scss';

const ModalUser = ({ openModal, onCloseModal, seeDetails }) => {
  const RegisterCard = ({ date, entry, out }) => (
    <div className='registers__card'>
      <div className='registers__card--date'>{date}</div>
      <div className='registers__card--times'>
        <div>
          Entrada: <span>{entry}</span>
        </div>
        <div>
          Salida: <span>{out}</span>
        </div>
      </div>
    </div>
  );
  return (
    <Modal open={openModal} onClose={onCloseModal} center>
      <Card avatar={avatarUser} title='Fernando Reyes' date='02/05/20 al 02/07/20' />
      <div className='registers'>
        <h4 className='registers__title'>
          Registro de Entrada y Salida
        </h4>
        <RegisterCard date='Hoy' entry='7:58' out='13:50' />
        <RegisterCard date='16/05/20' entry='7:58' out='13:50' />
        <RegisterCard date='12/05/20' entry='7:58' out='13:50' />
        <RegisterCard date='05/05/20' entry='7:58' out='13:50' />
      </div>
    </Modal>
  );
};

export default ModalUser;
