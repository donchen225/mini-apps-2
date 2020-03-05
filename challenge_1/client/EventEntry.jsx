import React from 'react';

const EventEntry = ({event}) => {
  const { date, description, lang, category1, category2, granularity } = event;
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
    </tr>
  );
}

export default EventEntry;