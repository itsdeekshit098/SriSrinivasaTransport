import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBuses } from './busSlice';
import { RootState, AppDispatch } from '../../app/store';

const BusTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { buses, loading, error } = useSelector((state: RootState) => state.bus);

  useEffect(() => {
    if(buses.length === 0) {
      dispatch(getBuses());
    }
  }, [dispatch, buses.length]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Bus No</th>
          <th>RC Link</th>
          <th>FC Link</th>
          <th>Insurance Link</th>
          <th>Permit Link</th>
        </tr>
      </thead>
      <tbody>
        {buses.map((bus) => (
          <tr key={bus.sno}>
            <td>{bus.sno}</td>
            <td>{bus.busno}</td>
            <td><a href={bus.rclink} target="_blank">RC</a></td>
            <td><a href={bus.fclink} target="_blank">FC</a></td>
            <td><a href={bus.insurancelink} target="_blank">Insurance</a></td>
            <td><a href={bus.permitlink} target="_blank">Permit</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BusTable;
