
import { getDateRelativeToNow } from "../../../../utils/formatter";
import { CreationDate, PostCardContainer, PostCardContent, PostCardHeader, PostCardsContainer, Title } from "./styles";
import removeMD from 'remove-markdown'

export interface Postcard {
  id: number,
  title: string,
  createdAt: string,
  body: string,
  issueId: number
}

function PostCard({issueId, title, createdAt, body}: Postcard) {

  return (
    <PostCardContainer href={`/post/${issueId}`}>
      <PostCardHeader>
        <Title>
          {title}
        </Title>
        <CreationDate>
          {getDateRelativeToNow(createdAt)}
        </CreationDate>
      </PostCardHeader>
      <PostCardContent>
        {removeMD(body)}
      </PostCardContent>
    </PostCardContainer>
  )
}

interface PostcardsProps {
  posts: Postcard[]
}
export function PostCards({ posts }: PostcardsProps) {

  return (
    <PostCardsContainer>
      {posts.map(post => {
        return <PostCard 
          key={post.id}
          {...post}
          />
      })}
    </PostCardsContainer>
  )  
}