import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  flex: 1;

  margin-top: 4.5rem;
`

export const TitleContainer = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const Title = styled.span`
  font-size: 1.125rem;
  color: ${props => props.theme["base-subtitle"]};
`

export const PostsAmount = styled.span`
  color: ${props => props.theme["base-span"]};
`

export const SearchBarInput = styled.input`
  padding: 0.75rem 1rem;
  gap: 0.5rem;
  border-radius: 6px;

  background: ${props => props.theme["base-input"]};
  color: ${props => props.theme["base-text"]};
  border: 1px solid ${props => props.theme["base-border"]};

  &::placeholder {
    color: ${props => props.theme["base-label"]};
  }
`