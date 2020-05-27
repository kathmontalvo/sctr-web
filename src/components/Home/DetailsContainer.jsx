import React, { useState } from 'react';
import Details from './InsuranceDetails';
import Card from './Card';

const DetailsContainer = ({ id }) => {
  const [btnText, setBtnText] = useState('Ver más');
  function seeDetails(id) {
    const details = document.getElementById(`details-${id}`);
    if (details.open) {
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
  return (
    <details open={false} id={`details-${id}`}>
      <summary>
        <Card btnText={btnText} seeDetails={seeDetails} id={id} />
      </summary>
      <Details />
    </details>
  );
};

export default DetailsContainer;
