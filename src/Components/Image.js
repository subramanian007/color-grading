import styled from 'styled-components';
import { useHistory } from 'react-router';

const Image = ({ id, img, title }) => {
  const history = useHistory();
  return (
    <NewStyle onClick={() => history.push(`/file/${id}`)}>
      <div className="image-div">
        <img src={img} alt={id} />
      </div>
      <div className="hidden-box">
        <h1>{title}</h1>
      </div>
    </NewStyle>
  );
};

export default Image;

const NewStyle = styled.div`
  position: relative;

  .image-div {
    width: 100%;
    overflow: hidden;
    img {
      height: 38rem;
      width: 100%;
      object-fit: cover;
      opacity: 1;
      transform: scale(1.35);
      transition: all 0.1s ease-in;

      @media only screen and (max-width: 400px) {
        height: 45rem;
        object-fit: cover;
      }

      :hover {
        opacity: 0.7;
        transform: scale(1.31);
      }
    }

    :hover + .hidden-box {
      display: block;
    }
  }
  .hidden-box {
    display: none;
    height: 3.5rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: #ff9d00;
    border-radius: 5px;
    transition: all 0.1s ease-in;

    :hover {
      display: block;
    }

    h1 {
      color: black;
      text-align: center;
      transform: translate(-50%, -50%);
      letter-spacing: 1.5px;
      bottom: -7px;
      left: 50%;
      position: absolute;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-family: 'Gemunu Libre', sans-serif;
    }
  }
`;
