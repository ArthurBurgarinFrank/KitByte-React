import Ball from './Ball';

const MapComp = (props) => {
    const balls = [
        { id: 0, x: "60%", y: "110%" },
        { id: 1, x: "60%", y: "85%" },
        { id: 2, x: "60%", y: "55%" },
        { id: 3, x: "10%", y: "55%" },
        { id: 4, x: "10%", y: "20%" },
        { id: 5, x: "90%", y: "20%" },
        { id: 6, x: "90%", y: "-10%" }
    ];

    return (
        <svg width="100%" height="75vh">
            {balls.map((ball, index) => {
                if (index < balls.length - 1) {
                    const nextBall = balls[index + 1];
                    return (
                        <line
                            key={`line-${ball.id}-${nextBall.id}`}
                            x1={ball.x}
                            y1={ball.y}
                            x2={nextBall.x}
                            y2={nextBall.y}
                            stroke="#67B5FF"
                            strokeWidth="10"
                        />
                    );
                }
                return null;
            })}

            {balls.map((ball) => (
                <Ball selected={ball.id == props.selected} index={ball.id} key={ball.id} x={ball.x} y={ball.y} number={ball.number} />
            ))}
        </svg>
    );
};

export default MapComp;
