import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchReport, placeRobot as apiPlace, moveRobot as apiMove, rotateLeft as apiLeft, rotateRight as apiRight } from './services/robotApi';
import Grid from './components/Grid/Grid';
import Controls from './components/Controls/Controls';
import { CONSTANTS } from './constants/constants';
import './App.css';

function App() {
  const [robotPosition, setRobotPosition] = useState<{ x: number; y: number; facing: string } | null>(null);
  const [report, setReport] = useState('');
  
  // Load robot state from API
  const loadRobotState = useCallback(async () => {
    try {
      const data = await fetchReport();
      if (data) {
        setRobotPosition(data);
        setReport(`${data.x},${data.y},${data.facing}`);
      } else {
        setRobotPosition(null);
        setReport('');
      }
    } catch (error) {
      setRobotPosition(null);
      setReport('');
    }
  }, []);

  // PLACE command - memoized to prevent Grid re-renders
  const handlePlace = useMemo(() => async (x: number, y: number) => {
    try {
      const data = await apiPlace(x, y, 'NORTH');
      setRobotPosition(data);
      setReport('');
    } catch (error) {
      console.error('Place failed:', error);
    }
  }, []);

  // MOVE command
  const handleMove = useCallback(async () => {
    if (!robotPosition) return;
    try {
      const data = await apiMove();
      setRobotPosition(data);
      setReport('');
    } catch (error) {
      console.error('Move failed:', error);
    }
  }, [robotPosition]);

  // LEFT command
  const handleLeft = useCallback(async () => {
    if (!robotPosition) return;
    try {
      const data = await apiLeft();
      setRobotPosition(data);
      setReport('');
    } catch (error) {
      console.error('Left turn failed:', error);
    }
  }, [robotPosition]);

  // RIGHT command
  const handleRight = useCallback(async () => {
    if (!robotPosition) return;
    try {
      const data = await apiRight();
      setRobotPosition(data);
      setReport('');
    } catch (error) {
      console.error('Right turn failed:', error);
    }
  }, [robotPosition]);

  // REPORT command
  const handleReport = useCallback(async () => {
    if (!robotPosition) return;
    try {
      const data = await fetchReport();
      if (data) {
        setReport(`${data.x},${data.y},${data.facing}`);
      } else {
        setReport('No robot placed');
      }
    } catch (error) {
      setReport('No robot placed');
    }
  }, [robotPosition]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!robotPosition) return;
      switch (event.key) {
        case 'ArrowUp':
          handleMove();
          break;
        case 'ArrowLeft':
          handleLeft();
          break;
        case 'ArrowRight':
          handleRight();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [robotPosition, handleMove, handleLeft, handleRight]);

  // Load robot state on initial render
  useEffect(() => {
    loadRobotState();
  }, [loadRobotState]);

  // Memoize the robot position object to prevent unnecessary Grid re-renders
  const gridRobotPosition = useMemo(() => {
    return robotPosition || { x: -1, y: -1, facing: 'NORTH' };
  }, [robotPosition]);

  return (
    <div className="App">
      <h1>{CONSTANTS.HEADING}</h1>
      <div className="main-content">
        
        <div className="panel">
        
          <div className="info">{CONSTANTS.INFO}</div>          
          <Grid robotPosition={gridRobotPosition} onCellClick={handlePlace} />
          <Controls
            onMove={handleMove}
            onLeft={handleLeft}
            onRight={handleRight}
            onReport={handleReport}
          />
          {report && <div className="report">{CONSTANTS.REPORT} {report}</div>}
        </div>        
      </div>
    </div>
  );
}

export default App;