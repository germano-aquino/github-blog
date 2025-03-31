import { zodResolver } from "@hookform/resolvers/zod";
import { PostsAmount, SearchBarContainer, SearchBarInput, Title, TitleContainer } from "./styles";
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchBar() {
  const { handleSubmit, register, reset} = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchPosts(data: SearchFormInput) {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleSearchPosts)}>
      <SearchBarContainer>
        <TitleContainer>
          <Title>Publicações</Title>
          <PostsAmount>6 publicações</PostsAmount>
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