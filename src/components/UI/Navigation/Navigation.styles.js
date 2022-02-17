import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    width: 100%;
    flex: 1;
    position: relative;
    padding: 20px;
    li {
      margin-left: 40px;
    }
  }
`;

export const Login = styled.li`
  position: absolute;
  left: 10px;
  margin-left: 0;
  cursor: default;
`;
