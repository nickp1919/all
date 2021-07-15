import styled from 'styled-components';
export const SpinnerStyled = styled.div `
  color: #8e8e93;
  display: inline-block;
  padding: 6px 0 0 6px;
  position: relative;
  width: 24px;
  height: 24px;
  margin-bottom: 8px;

  & div {
    transform-origin: 6px 6px;
    animation: spinner 1.2s linear infinite;
  }
  & div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 12px;
    left: 6px;
    width: 2px;
    height: 6px;
    border-radius: 20%;
    background: #8e8e93;
  }
  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  & div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  & div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  & div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  & div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  & div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  & div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  & div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  & div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  & div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  & div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  & div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const LoadingText = styled.span `
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.066px;
  color: #8e8e93;
`;
