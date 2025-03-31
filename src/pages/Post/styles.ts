import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 54rem;

  align-items: center;
  justify-content: center;
`

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10.5rem;
  padding: 2rem;
  margin-top: -5.5rem;

  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`

export const PostInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  
  margin-bottom: 1.25rem;

  a {
    font-size: 0.75rem;
    color: ${props => props.theme.blue};
    text-decoration: none;
    font-weight: bold;
    border-bottom: 2px solid ${props => props.theme["base-profile"]};
    transition: 
      border-bottom 0.5s ease-out 0.2s,
      text-shadow 0.5s ease-out 0.2s;
  }

  a:hover {
    cursor: pointer;
    text-shadow: 0 0 2px;
    border-bottom: 2px solid ${props => props.theme.blue};
  }
`

export const WhiteSpace = styled.span`
  padding: 0 0.25rem;
`

export const PostInfoFooter = styled.footer`
  margin-top: auto;

  svg {
    margin-right: 0.5rem;
    color: ${props => props.theme["base-label"]};
  }

  span {
    color: ${props => props.theme["base-span"]}
  }

  span + span {
    margin-left: 1.5rem;
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 130%;
  color: ${props => props.theme["base-title"]};
  
`

export const PostContentContainer = styled.div`
  padding: 2rem 2.5rem;
`