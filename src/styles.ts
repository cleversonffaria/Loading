import styled, { css } from "styled-components";

interface Props {
  length: number;
}

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 500px;
  height: 200px;
  transform: translate(0%, -10%);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  span {
    display: block;
    font-family: "Lato";
    font-size: 40px;
    letter-spacing: 12px;
    text-align: center;
    color: #fff;
    & + span {
      top: 170px;
      font-size: 20px;
    }
  }
`;

export const Circle = styled.div<Props>`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: #036fd3;

  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  left: 0;
  transform-origin: 50%;
  animation: circle 0.5s alternate infinite ease;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ length }) => {
    return css`
      &:nth-child(${length + 1}) {
        left: ${length * 11.5}%;
        right: 15%;
        animation-delay: ${length / 11}s;
      }
    `;
  }}

  @keyframes circle {
    0% {
      top: 90px;
      height: 10px;
      border-radius: 50%;
      transform: scaleX(2.5);
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0%;
    }
  }
`;

export const Shadow = styled.div<Props>`
  width: 30px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 97px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow 0.5s alternate infinite ease;

  ${({ length }) => {
    return css`
      &:nth-child(${length + 1}) {
        left: ${length * 11.5}%;
        right: 15%;
        animation-delay: ${length / 11}s;
      }
    `;
  }}

  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
    }
    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }
`;
