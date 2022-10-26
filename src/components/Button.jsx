import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ButtonStyle = styled.div`
margin-top: 2rem;

.button {
  font-size: 2.2rem;
  background-color: ${(props) =>
      props.outline ? "transparent" : 'var(--gray-1)'};
  padding: 0.7em 2em;
  border-radius:8px;
  white-space: nowrap;
  border: 2px solid var(--gray-1);
  display: inline-block;
  color:  ${(props) =>
      !props.outline ? "black" : 'var(--gray-1)'};
}
@media only  screen and (max-width: 768px){
    .button {
        font-size: 1.7rem ;

    }
}
`

function Button({
    btnLink="/" ,
    
    btnText="test" ,
     outline= false}) {
  return (
    <ButtonStyle  outline={outline}>
        <Link className='button'  to={btnLink}> {btnText} </Link>
    </ButtonStyle>
  )
}

export default Button