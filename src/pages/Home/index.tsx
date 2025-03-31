import { PostCards } from "./components/PostCards"
import { Profile } from "./components/Profile"
import { SearchBar } from "./components/SearchBar"
import { HomeContainer } from "./styles"

export function Home() {
  return(
    <HomeContainer>
      <Profile />
      <SearchBar />
      <PostCards />
    </HomeContainer>
  )
}