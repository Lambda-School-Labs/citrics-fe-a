import React from 'react';
import { Canvas } from '../../layouts';
import { SearchPanel } from '../../common/';

// these functions are acting as jsx return statements, can be compartmentalized later.
function titleContainer() {
  return <div></div>;
}
function title() {
  return (
    <div
      id="title"
      style={{
        fontSize: 36,
        paddingTop: '30vh',
        lineHeight: '48px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {' '}
      Where will you wander?
    </div>
  );
}
// Main canvas below renders /common/SearchPanel component, this is the primary entry point for users
export default ({ styles }) => <Canvas Main={SearchPanel} />;
