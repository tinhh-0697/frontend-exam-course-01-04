import styled from 'styled-components';

export const GroupLoading = styled.div`
  .ring {
    margin-top: 112px;
    transform: translate(282%, -50%);
    width: 150px;
    height: 150px;
    background: transparent;
    border-radius: 50%;
    text-align: center;
    line-height: 150px;
    font-family: sans-serif;
    font-size: 20px;
    color: #fff000;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-shadow: 0 0 10px #fff000;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  .ring:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #fff000;
    border-right: 3px solid #fff000;
    border-radius: 50%;
    animation: animateCircle 2s linear infinite;
  }
  .load-span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;
  }
  .load-span:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff000;
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px #fff000;
  }

  @keyframes animateCircle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`;
