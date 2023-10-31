import module from "../../dependencies";

const Answer = (props) => {
  const myObject = props.object ? props.object : null;

  var sortArray = [0, 1, 2, 3];
  for (let i = sortArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sortArray[i], sortArray[j]] = [sortArray[j], sortArray[i]];
  }

  var imgArray = [
    myObject.alternativa_certa,
    myObject.alternativa_errada1,
    myObject.alternativa_errada2,
    myObject.alternativa_errada3,
  ];


  const handleClick = (value) => {
    props.onClick(value === myObject.alternativa_certa);
  };

  return (
    <module.Grid>
      <module.Grid
        sx={{
          display: "flex",
          padding: 1,
          gap: 1,
          width: "100vw",
          justifyContent: "center",
        }}
      >
        <module.Grid
          onClick={() => handleClick(imgArray[sortArray[0]])}
          sx={{
            backgroundColor: "gray",
            width: "45%",
            borderRadius: 6,
          }}
        >
          <img src={imgArray[sortArray[0]]} alt="" />
        </module.Grid>
        <module.Grid
          onClick={() => handleClick(imgArray[sortArray[1]])}
          sx={{
            backgroundColor: "gray",
            width: "45%",
            borderRadius: 6,
          }}
        >
          <img src={imgArray[sortArray[1]]} alt="" />
        </module.Grid>
      </module.Grid>
      <module.Grid
        sx={{
          display: "flex",
          padding: 1,
          gap: 1,
          width: "100vw",
          justifyContent: "center",
        }}
      >
        <module.Grid
          onClick={() => handleClick(imgArray[sortArray[2]])}
          sx={{
            backgroundColor: "gray",
            width: "45%",
            borderRadius: 6,
          }}
        >
          <img src={imgArray[sortArray[2]]} alt="" />
        </module.Grid>
        <module.Grid
          onClick={() => handleClick(imgArray[sortArray[3]])}
          sx={{
            backgroundColor: "gray",
            width: "45%",
            borderRadius: 6,
          }}
        >
          <img src={imgArray[sortArray[3]]} alt="" />
        </module.Grid>
      </module.Grid>
    </module.Grid>
  );
};

export default Answer;
