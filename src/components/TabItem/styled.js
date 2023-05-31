import styled from 'styled-components'

const StyledButton = styled.button`
  color: ${p => (p.isActive ? '#2563eb' : '#7b8794')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${p =>
    p.isActive ? '2px solid #2563eb' : '2px solid #dfe2e5'};
  padding: 0 16px 4px;
  padding-bottom: ${p => p.isActive && '8px'};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  @media screen and (width>768px) {
    font-size: 16px;
    padding: 0 26px 8px;
    padding-bottom: ${p => p.isActive && '12px'};
  }
`
export default StyledButton
