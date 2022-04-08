import styled from 'styled-components';

export const ButtonLayout = styled.button`
  padding: 5px 10px;
  background: ${(props) => props.theme.bgColor};
  font-size: ${(props) => props.theme.main};
  color: ${(props) => props.theme.color};
`;

ButtonLayout.defaultProps = {
  theme: {
    bgColor: '#333',
    fontSize: '24px',
    color: '#fff',
  },
};
