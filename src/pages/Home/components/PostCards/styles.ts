import styled from "styled-components";

export const PostCardsContainer = styled.nav`
  max-width: 54rem;
  flex: 1;
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 2rem;
  margin-top: 3rem;
`

export const PostCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  text-decoration: none;

  background: ${props => props.theme["base-post"]};

  border-radius: 10px;
  border: 2px solid ${props => props.theme["base-post"]};
  transition: border 0.7s ease-out 0.2s;

  &:hover {
    border: 2px solid ${props => props.theme["base-label"]};
    cursor: pointer;
  }
`
export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const Title = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme["base-title"]};
  width: 17.75rem;
`

export const CreationDate = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme["base-span"]};
`

export const PostCardContent = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  color: ${props => props.theme["base-text"]}
`