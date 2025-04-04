import { NavLink, useParams } from "react-router-dom";
import { PostContainer, PostContentContainer, PostInfoContainer, PostInfoFooter, PostInfoHeader, Title, WhiteSpace } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { getDateRelativeToNow } from "../../utils/formatter";

interface Post {
  login: string,
  title: string,
  commentsAmount: number,
  body: string,
  createdAt: string,
  issueUrl: string,
}

export function Post() {
  const {issueId} = useParams()
  const [post, setPost] = useState<Post>()
  
  useEffect(() => {
    api.get(`repos/germano-aquino/github-blog/issues/${issueId}`)
      .then(response => {
        const { data } = response
        setPost({
          login: data.user.login,
          title: data.title,
          commentsAmount: data.comments,
          body: data.body,
          createdAt: data.created_at,
          issueUrl: data.html_url
        })
      }).catch(err => console.log(err))
  }, [issueId])

  function getCommentsText(commentsAmount: number) {
    if (commentsAmount === 0) {
      return 'Sem comentários'
    } else if (commentsAmount === 1) {
      return '1 comentário'
    } else {
      return `${commentsAmount} comentários`
    }
  }

  if (post) {
    return (
      <PostContainer>
        <PostInfoContainer>
          <PostInfoHeader>
            <NavLink to="/" title="Página Inicial">
              <FontAwesomeIcon icon={faAngleLeft} />
              <WhiteSpace/>
              VOLTAR
            </NavLink>
            <a href={post.issueUrl} target="_blank">
              VER NO GITHUB
              <WhiteSpace/>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
            </a>
          </PostInfoHeader>
          <Title>{post.title}</Title>
          <PostInfoFooter>
            <span><FontAwesomeIcon icon={faGithub} />{post.login}</span>
            <span><FontAwesomeIcon icon={faCalendarDay} />{getDateRelativeToNow(post.createdAt)}</span>
            <span><FontAwesomeIcon icon={faComment} />{getCommentsText(post.commentsAmount)}</span>
          </PostInfoFooter>
        </PostInfoContainer>
        <PostContentContainer>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.body}
          </ReactMarkdown>
        </PostContentContainer>
      </PostContainer>
    )
  } else {
    return <h1>Loading...</h1>
  }
  
}