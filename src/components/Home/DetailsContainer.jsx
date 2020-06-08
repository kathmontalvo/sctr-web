import React, { useState, useEffect } from 'react';
import Details from './InsuranceDetails';
import Card from './Card';
import ModalUser from './Modal';

const DetailsContainer = ({ id, avatar, children, title, date, text }) => {
  const [btnText, setBtnText] = useState('Ver más');
  const [openModal, setOpenModal] = useState(false);
  const allDetails = [document.querySelectorAll('details')];
  const onOpenModal = () => {
    setOpenModal(true);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };

  function seeDetails(id) {
    const details = document.getElementById(`details-${id}`);
    if (text) {
      onOpenModal();
    } else if (details.open) {
      details.removeAttribute('open');
      setBtnText('Ver más');
    } else if (!details.open) {
      details.setAttribute('open', true);
      setBtnText('Ver menos');
    }
    // detailsList.forEach((details) => {
    //   details.querySelector('summary').addEventListener('click', expand);
    // });
  }
  useEffect(() => {
    if (text) {
      setBtnText('Ver Registro');
    }
  }, allDetails);
  return (
    <details open={false} id={`details-${id}`}>
      <summary>
        <Card btnText={btnText} seeDetails={seeDetails} id={id} avatar={avatar} title={title} date={date} />
      </summary>
      {children}
      <ModalUser openModal={openModal} onCloseModal={onCloseModal} />
    </details>
  );
};

export default DetailsContainer;
