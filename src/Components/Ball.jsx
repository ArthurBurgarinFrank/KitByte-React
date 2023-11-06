import module from "../dependencies";

const Ball = ({ selected, index, x, y, img, description }) => {
  return (
    <g>
      <module.Link
        to={selected ? "/quiz" : null}
        state={selected ? { img: img, description: description } : null}
      >
        <circle
          cx={x}
          cy={y}
          r="5%"
          fill={selected ? "#2880F2" : "#ABD0FF"}
          stroke="#67B5FF"
          strokeWidth={4}
        />
        <text
          x={x}
          y={y}
          fontSize="1.5em"
          fontWeight="bold"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="white"
        >
          {index}
        </text>
        <polygon />
      </module.Link>
    </g>
  );
};

export default Ball;
