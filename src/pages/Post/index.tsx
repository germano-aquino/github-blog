import { NavLink } from "react-router-dom";
import { PostContainer, PostContentContainer, PostInfoContainer, PostInfoFooter, PostInfoHeader, Title, WhiteSpace } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export function Post() {
  return (
    <PostContainer>
      <PostInfoContainer>
        <PostInfoHeader>
          <NavLink to="/" title="Página Inicial">
            <FontAwesomeIcon icon={faAngleLeft} />
            <WhiteSpace/>
            VOLTAR
          </NavLink>
          <a href="https://github.com/germano-aquino" target="_blank">
            VER NO GITHUB
            <WhiteSpace/>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </a>
        </PostInfoHeader>
        <Title>JavaScript data types and data structures</Title>
        <PostInfoFooter>
          <span><FontAwesomeIcon icon={faGithub} /> germano_aquino</span>
          <span><FontAwesomeIcon icon={faCalendarDay} /> Há 1 dia</span>
          <span><FontAwesomeIcon icon={faComment} /> 5 comentários</span>
        </PostInfoFooter>
      </PostInfoContainer>
      <PostContentContainer>
        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        </p>
        <a>Dynamic typing</a>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
      </PostContentContainer>
    </PostContainer>
  )
}