// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './Skill.css'

// const CircleProgressBar = (props) => {
//   const { percentage, strokeWidth, sqSize, strokeColor, fillColor } = props;

//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setProgress(percentage);
//     }, 1000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [percentage]);

//   const radius = (sqSize - strokeWidth) / 2;
//   const viewBox = `0 0 ${sqSize} ${sqSize}`;
//   const dashArray = radius * Math.PI * 2;
//   const dashOffset = dashArray - (dashArray * progress) / 100;

//   return (
//     <svg width={sqSize} height={sqSize} viewBox={viewBox}>
//       <circle
//         className="circle-background"
//         cx={sqSize / 2}
//         cy={sqSize / 2}
//         r={radius}
//         strokeWidth={`${strokeWidth}px`}
//         fill={fillColor}
//       />
//       <circle
//         className="circle-progress"
//         cx={sqSize / 2}
//         cy={sqSize / 2}
//         r={radius}
//         strokeWidth={`${strokeWidth}px`}
//         stroke={strokeColor}
//         fill="none"
//         strokeLinecap="round"
//         strokeDasharray={dashArray}
//         strokeDashoffset={dashOffset}
//       />
//       <text
//         className="circle-text"
//         x={`${sqSize / 2}`}
//         y={`${sqSize / 2}`}
//         dy=".3em"
//         textAnchor="middle"
//         fill={strokeColor}
//       >
//         {`${progress}%`}
//       </text>
//     </svg>
//   );
// };

// CircleProgressBar.propTypes = {
//   percentage: PropTypes.number.isRequired,
//   strokeWidth: PropTypes.number.isRequired,
//   sqSize: PropTypes.number.isRequired,
//   strokeColor: PropTypes.string.isRequired,
//   fillColor: PropTypes.string.isRequired,
// };

// CircleProgressBar.defaultProps = {
//   percentage: 0,
//   strokeWidth: 10,
//   sqSize: 200,
//   strokeColor: '#2DB1E4',
//   fillColor: 'none',
// };

// export default CircleProgressBar;