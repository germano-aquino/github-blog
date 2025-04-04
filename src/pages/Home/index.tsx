import { useEffect, useState } from "react"
import { Postcard, PostCards } from "./components/PostCards"
import { Profile } from "./components/Profile"
import { SearchBar } from "./components/SearchBar"
import { HomeContainer } from "./styles"
import { api } from "../../lib/axios"

export function Home() {
  const [postcards, setPostcards] = useState<Postcard[]>([])
  const [totalPosts, setTotalPosts] = useState<number>(0)

  function searchIssues(query?: string) {
    const baseQuery = "is:issue repo:germano-aquino/github-blog"
    let q
    if(query) {
      q = query + " " + baseQuery
    } else {
      q = baseQuery
    }
    api.get('/search/issues', {
      params: {
        q
      }
    }).then(response => {
      setTotalPosts(response.data.total_count)
      console.log(response)
      let newPostcards:Postcard[] = []
      response.data.items.map(post => {
        newPostcards = [...newPostcards, {
          id: post.id,
          title: post.title,
          createdAt: post.created_at,
          body: post.body,
          issueId: post.number
        }]
      })
      setPostcards(newPostcards)
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    searchIssues()
  }, [])

  return(
    <HomeContainer>
      <Profile />
      <SearchBar
        totalPosts={totalPosts}
        searchIssues={searchIssues}
      />
      <PostCards
        posts={postcards}
      />
    </HomeContainer>
  )
}