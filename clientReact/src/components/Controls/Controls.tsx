import React from 'react';
import { CONSTANTS } from '../../constants/constants';
import './Controls.css';

interface ControlsProps {
  onMove: () => void;
  onLeft: () => void;
  onRight: () => void;
  onReport: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onMove, onLeft, onRight, onReport }) => {
  return (
    <>
      <div className="controls">
        <div className="sub-controls">
          <button onClick={onLeft} title="Arrow Left Key">{CONSTANTS.BUTTON.LEFT}</button>
          <button onClick={onMove} title="Arrow Up Key">{CONSTANTS.BUTTON.MOVE}</button>
          <button onClick={onRight} title="Arrow Right Key">{CONSTANTS.BUTTON.RIGHT}</button>
        </div>
      </div>

      <div className="report-btn">
        <button onClick={onReport}>{CONSTANTS.BUTTON.REPORT}</button>
      </div>
    </>    
  );
};

export default Controls;