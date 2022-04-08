import styled from 'styled-components';

export const LikeButton = styled.button<{ likedFlag: boolean }>`
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  position: absolute;
  background: ${({ likedFlag }) => (likedFlag ? 'red' : 'gray')};
  bottom: 10px;
  left: 20px;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: white;

  &:before {
    content: '♡';
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translate(0, -50%);
  }
`;
