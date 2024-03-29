import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 85vw;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 0px;
    margin-right: 0px;
    margin-left: 0px;
  }
`;
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid darkgrey;
  text-align: center;
`;
export const Total = styled.span`
  margin-top: 10px;
  margin-left: auto;
  font-size: 36px;
`;
