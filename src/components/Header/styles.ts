import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 18.5rem;

  justify-content: space-between;
  align-items: start;
  background: ${props => props.theme["base-profile"]};
  z-index: -2;
`
export const RectangleEffect = styled.div`
  height: 3.25rem;
  width: 55.75rem;
  position: absolute;
  left: 0;
  right: 0;
  margin:  14.75rem auto 0.5rem auto;
  background: #14589C;
  filter: blur(212px);
  z-index: -1;
`

export const BigCircleEffect = styled.div`
  height: 14.75rem;
  width: 14.75rem;
  border-radius: 100%;
  margin: -6rem 0 0 -8.125rem;
  position: absolute;
  background: #14589C;
  filter: blur(400px);
  z-index: -1;
`

export const LittleCircleEffect = styled.div`
  height: 9.75rem;
  width: 9.75rem;
  border-radius: 100%;
  right: 0;
  margin: -2.25rem 0.5rem 0 auto;
  transform: rotate(15deg);
  position: absolute;
  background: #14589C;
  filter: blur(368px);
`

export const Logo = styled.img`
  margin-top: 4rem;
`

export const LeftEffect = styled.img`
  margin-top: 4.375rem;
`

export const RightEffect = styled.img`
  margin-top: 1.875rem;
`