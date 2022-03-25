import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Arrow>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
`;

export default Slider;
