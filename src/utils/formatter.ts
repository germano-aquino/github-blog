import { ptBR } from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

export function getDateRelativeToNow(createdAt: string) {
  return formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true
  })
}