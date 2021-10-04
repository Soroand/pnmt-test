import React from 'react';
import { BT } from '../../../../../components';
import FieldCard from '../../../../../components/FieldCard';
import styles from '../styles';

const Course = ({ field }) => {
  return (
    <>
      <BT style={styles.titles}>Course</BT>
      <FieldCard fieldData={field} />
    </>
  );
};

export default Course;
