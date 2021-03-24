import React from 'react'
import Button from './components/Button'

import styled from 'styled-components'

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
`

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;

  justify-content: ${({page}) => {
    if(page === 'first') return 'flex-end'
    else if(page === 'middle') return 'space-between'
    else return 'flex-start'
  }};
`

const Link = styled.a.attrs(props => ({
  target: '_blank'
}))`
  color:  violet;
  font-size: 1.5rem;
`

function App() {
  return (
    <MainWrapper>
      <Button primary margin="5rem">My Primary Button</Button>
      <Button>My Button</Button>
      <PaginationWrapper page='first'>
        <Button>page 1</Button>
        <Button>page 2</Button>
        <Button>page 3</Button>
      </PaginationWrapper>
      <Link href="https://www.messenger.com/t/2704763626258180">One Link</Link>
      <Link href="https://www.messenger.com/t/2704763626258180">Another Link</Link>
    </MainWrapper>
  );
}

export default App;
