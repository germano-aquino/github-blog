import { CreationDate, PostCardContainer, PostCardContent, PostCardHeader, PostCardsContainer, Title } from "./styles";

interface PostProps {
  id: number,
  title: string,
  createdAt: Date,
  description: string,
}

function PostCard({id, title, createdAt, description}: PostProps) {
  return (
    <PostCardContainer href={'/post/' + id}>
      <PostCardHeader>
        <Title>
          {title}
        </Title>
        <CreationDate>
          há 1 dia
        </CreationDate>
      </PostCardHeader>
      <PostCardContent>
        {description}
      </PostCardContent>
    </PostCardContainer>
  )
}

export function PostCards() {
  const posts: PostProps[] = [
    {
      id: 0,
      title: 'JavaScript data types and data structures',
      createdAt: new Date(),
      description: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\n Dynamic typing\n JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:"
    },
    {
      id: 1,
      title: 'JavaScript data types and data structures',
      createdAt: new Date(),
      description: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\n Dynamic typing\n JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:"
    },
    {
      id: 2,
      title: 'JavaScript data types and data structures',
      createdAt: new Date(),
      description: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\n Dynamic typing\n JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:"
    },
    {
      id: 3,
      title: 'JavaScript data types and data structures',
      createdAt: new Date(),
      description: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\n Dynamic typing\n JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:"
    },
    {
      id: 4,
      title: 'JavaScript data types and data structures',
      createdAt: new Date(),
      description: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\n Dynamic typing\n JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:"
    },
    {
      id: 5,
      title: 'JavaScript data types and data structures',
      createdAt: new Date(),
      description: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\n Dynamic typing\n JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:"
    },
  ]

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