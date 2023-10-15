export default function CircleProgress(props: {
  radius: number;
  percentage: number;
}): JSX.Element {
  const { radius, percentage } = props;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  const circleWidth = 80;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        className="circle"
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="8px"
          r={radius}
          className="circle__background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="8px"
          r={radius}
          className="circle__progress"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(90 ${circleWidth / 2}
          ${circleWidth / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle__text"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}
