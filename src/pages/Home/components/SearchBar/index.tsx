import { zodResolver } from "@hookform/resolvers/zod";
import { PostsAmount, SearchBarContainer, SearchBarInput, Title, TitleContainer } from "./styles";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { api } from "../../../../lib/axios";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>
interface SearchBarProps {
  totalPosts: number,
  searchIssues: (query: string) => void
}

export function SearchBar({ totalPosts, searchIssues }: SearchBarProps) {
  const { handleSubmit, register, reset} = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchPosts({ query }: SearchFormInput) {
    searchIssues(query)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleSearchPosts)}>
      <SearchBarContainer>
        <TitleContainer>
          <Title>Publicações</Title>
          <PostsAmount>{totalPosts} publicações</PostsAmount>
        </TitleContainer>
          <SearchBarInput 
            type="text" 
            placeholder="Buscar conteúdo"
            {...register('query')}  
          />
      </SearchBarContainer>
    </form>
  )
}