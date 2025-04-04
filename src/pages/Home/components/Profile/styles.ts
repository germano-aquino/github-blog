import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  max-width: 54rem;
  height: 13.25rem;
  padding: 2rem;
  margin-top: -5.5rem;

  gap: 2rem;
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme["base-title"]}
  }

  a {
    font-size: 0.75rem;
    color: ${props => props.theme.blue};
    text-decoration: none;
    border-bottom: 2px solid ${props => props.theme["base-profile"]};
    transition: 
      border-bottom 0.5s ease-out 0.2s,
      text-shadow 0.5s ease-out 0.2s; 

    svg {
      margin-left: 0.5rem;
    }
  }

  a:hover {
    cursor: pointer;
    text-shadow: 0 0 2px;
    border-bottom: 2px solid ${props => props.theme.blue};
  }
`

export const ProfileFooter = styled.footer`
  margin-top: auto;

  svg {
    margin-right: 0.5rem;
    color: ${props => props.theme["base-label"]};
  }

  span {
    color: ${props => props.theme["base-subtitle"]}
  }

  span + span {
    margin-left: 1.5rem;
  }
`