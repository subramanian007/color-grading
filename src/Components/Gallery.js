import React from 'react';
import { data } from './Data';
import styled from 'styled-components';
import Image from './Image';

const Gallery = () => {
  return (
    <GalleryStyle>
      {data.map((img) => {
        return (
          <Image
            img={img.img}
            id={img.index}
            key={img.index}
            title={img.title}
          />
        );
      })}
    </GalleryStyle>
  );
};

const GalleryStyle = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 630px) {
    display: block;
  }
`;

export default Gallery;
