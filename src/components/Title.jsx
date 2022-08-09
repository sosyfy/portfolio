import React from 'react'
import styled from 'styled-components'

const Tittle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

.back_title{
  text-transform: uppercase;
  font-size: 9rem;
  color: transparent;
  opacity: 10%;
  -webkit-text-stroke: 0.3px #f3f7fa;
  background-color: transparent;
  z-index: -1;
}

.top_title {
  z-index: 1;
   font-size: 4rem;
   font-weight: 900;
   color: whitesmoke;
  position: absolute;
  -webkit-text-stroke: 1.5px #f3f7fa;
  text-transform: uppercase;
  
}
@media only screen and (max-width:768px) {
  padding: 0;
    .back_title {
        font-size: 6rem;
    }
    .top_title{
        font-size: 3rem;
    }
}
@media only screen and (max-width:468px) {
  padding: 0;
    .back_title {
        font-size: 5rem;
    }
    .top_title{
        font-size: 2.5rem;
    }
}
`

function Title({titleTop='' , titleBack=""}) {
  return (
    <Tittle>
      <h1 class="back_title">{titleBack}</h1>
      <h1 class="top_title">{titleTop}</h1>
    </Tittle>
  );
}


export default Title
