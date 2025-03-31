import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileContent, ProfileFooter, ProfileHeader, ProfilePicture } from "./styles";
import logo from '../../../../assets/github-blog-logo.svg'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Profile() {
  return(
    <ProfileContainer>
      <ProfilePicture src={logo} alt=''/>
      <ProfileContent>
        <ProfileHeader>
          <h3>Germano Aquino</h3>
          <div>
            <a href="https://github.com/germano-aquino" target="_blank">GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
          </div>
        </ProfileHeader>
        <p>
        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>
        <ProfileFooter>
          <span><FontAwesomeIcon icon={faGithub} /> germano_aquino</span>
          <span><FontAwesomeIcon icon={faBuilding} /> SAP</span>
          <span><FontAwesomeIcon icon={faUserGroup} /> 32 seguidores</span>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  )
}