import React from 'react';
import './Grid.css';

interface GridProps {
  robotPosition: { x: number; y: number; facing: string };
  onCellClick: (x: number, y: number) => void;
}

const Grid: React.FC<GridProps> = ({ robotPosition, onCellClick }) => {
  const rows = 5;
  const cols = 5;

  return (
    <div className="grid">
      {Array.from({ length: rows }).map((_, rowIdx) => {
        const y = rows - rowIdx - 1;
        return (
          <div key={y} className="row">
            {Array.from({ length: cols }).map((_, x) => (
              <div 
                key={`${x}-${y}`} 
                className="cell" 
                onClick={() => onCellClick(x, y)}
              >
                {robotPosition.x === x && robotPosition.y === y && (
                  <div className={`robot ${robotPosition.facing.toLowerCase()}`}>🤖</div>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;


