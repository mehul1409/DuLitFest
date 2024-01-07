import "./PageHeader.scss";

const PageHeader = (props) => {
  return (
    <div className="wave-header" style={{ backgroundColor: props.bgColor }}>
      <svg
        className="absolute bottom-0 left-0"
        style={{ backgroundColor: props.bgColor }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={props.fgColor}
          fillOpacity="1"
          d="M0,256L21.8,245.3C43.6,235,87,213,131,208C174.5,203,218,213,262,234.7C305.5,256,349,288,393,277.3C436.4,267,480,213,524,170.7C567.3,128,611,96,655,106.7C698.2,117,742,171,785,213.3C829.1,256,873,288,916,266.7C960,245,1004,171,1047,117.3C1090.9,64,1135,32,1178,53.3C1221.8,75,1265,149,1309,197.3C1352.7,245,1396,267,1418,277.3L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
      <div className="HeadingOfPage">
        <h1 style={{ textColor: props.textColor }}>{props.heading}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
