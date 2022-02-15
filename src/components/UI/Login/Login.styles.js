import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
`;

export const LoginCard = styled.div`
  position: relative;
  display: inline-block;
  max-width: 700px;
  min-width: 500px;
  box-sizing: border-box;
  padding: 30px 25px;
  background-color: #ffffff;
  border-radius: 40px;
  margin: 40px 0;
`;

export const StyledButton = styled.button`
  transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  margin-top: 35px;
  background-color: white;
  border: 1px solid #39393a;
  line-height: 0;
  font-size: 17px;
  display: inline-block;
  box-sizing: border-box;
  padding: 20px 15px;
  border-radius: 60px;
  color: #39393a;
  font-weight: 100;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 1;
  :hover,
  :focus {
    color: white;
    background-color: #39393a;
  }
`;

export const StyledLabel = styled.label`
  transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  transform-origin: left center;
  color: #39393a;
  font-weight: 100;
  letter-spacing: 0.01em;
  font-size: 17px;
  box-sizing: border-box;
  padding: 10px 15px;
  display: block;
  position: absolute;
  margin-top: -40px;
  z-index: 2;
  pointer-events: none;
`;

export const Question = styled.div`
  position: relative;
  padding: 10px 0;
  :first-of-type {
    padding-top: 0;
  }
  :last-of-type {
    padding-top: 0;
  }
`;

export const StyledInput = styled.input`
  transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  appearance: none;
  border: 1px solid #39393a;
  line-height: 0;
  font-size: 17px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 10px 15px;
  border-radius: 60px;
  color: #39393a;
  font-weight: 100;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 1;
  margin-top: 30px;
  &:focus {
    outline: none;
    background: #39393a;
    color: white;
    margin-top: 30px;
  }
  :valid ~ ${StyledLabel} {
    font-weight: 700;
    transform: translate(0, -35px);
  }
`;

export const ErrorMessage = styled.span`
  color: rgba(255, 74, 86, 1);
  font-weight: 700;
  margin: 10px 0 5px 10px;
  display: inline-block;
  transition: 1s;
`;
