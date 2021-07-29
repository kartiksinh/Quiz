import styled from 'styled-components';
import { Button } from 'antd';

export const MainDiv = styled.div`
  margin: 0 auto;
  width: 800px;
  margin-top: 150px;
  border: 1px solid #ececec;
  padding: 30px;
  padding-right: 80px;
  box-shadow: 1px 2px #ececec;
  border-radius: 10px;
`;


export const QuesDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  border-radius: 10px;
  margin-right: 20px;
`;