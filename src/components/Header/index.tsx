import logo from '../../assets/github-blog-logo.svg'
import leftEffect from '../../assets/left-effect.svg'
import rightEffect from '../../assets/right-effect.svg'
import { BigCircleEffect, HeaderContainer, LeftEffect, LittleCircleEffect, Logo, RectangleEffect, RightEffect } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <BigCircleEffect />
      <LeftEffect src={leftEffect} alt=""/>
      <Logo src={logo} alt=''/>
      <RectangleEffect />
      <RightEffect src={rightEffect} alt=""/>
      <LittleCircleEffect/>
    </HeaderContainer>
  )
}