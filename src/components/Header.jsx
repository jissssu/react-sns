import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #007bff;
`;


const Header = () => {
  return (
    <HeaderContainer>
      <BackButton>뒤로</BackButton>
      <Title>🔔</Title>
    </HeaderContainer>
  );
};

export default Header;
