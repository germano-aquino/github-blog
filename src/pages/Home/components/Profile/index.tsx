import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileContent, ProfileFooter, ProfileHeader, ProfilePicture } from "./styles";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";

interface Profile {
  avatarUrl: string,
  name: string,
  bio: string,
  login: string,
  company: string | null,
  followers: number | null
}

export function Profile() {
  const [profile, setProfile] = useState<Profile | undefined>()

  useEffect(() => {
    api.get('users/germano-aquino')
      .then(response => {
        setProfile ({
          avatarUrl: response.data.avatar_url,
          name: response.data.name,
          bio: response.data.bio,
          login: response.data.login,
          company: response.data.company,
          followers: response.data.followers
        })
      })
      .catch(error => console.log(error))
  }, [])

  if (profile !== undefined) {
    return (
      <ProfileContainer>
        <ProfilePicture src={profile.avatarUrl} alt=''/>
        <ProfileContent>
          <ProfileHeader>
            <h3>{profile.name}</h3>
            <div>
              <a href="https://github.com/germano-aquino" target="_blank">GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
            </div>
          </ProfileHeader>
          <p>
            {profile.bio}
          </p>
          <ProfileFooter>
            {profile.login && <span><FontAwesomeIcon icon={faGithub} /> {profile.login}</span>}
            {profile.company && <span><FontAwesomeIcon icon={faBuilding} /> {profile.company}</span>}
            {profile.followers && <span><FontAwesomeIcon icon={faUserGroup} /> {profile.followers} seguidores</span>}
          </ProfileFooter>
        </ProfileContent>
      </ProfileContainer>)
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}