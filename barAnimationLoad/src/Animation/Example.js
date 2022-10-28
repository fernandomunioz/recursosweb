import Bar from './Bar'
import Container from './Container'

import { useNProgress, NProgress } from '@tanem/react-nprogress'
import { useState } from 'react'


function Example(){
    const [isAnimating, setisAnimating] = useState(false)

    return(
    <>
    <h1>
        Welcome to site
    </h1>
        {<NProgress isAnimating={isAnimating}>
            {({ animationDuration, isFinished, progress }) => (
            <Container animationDuration={animationDuration} isFinished={isFinished}>
                <Bar animationDuration={animationDuration} progress={progress} />
                Esperando ..
            </Container>
            )}
        </NProgress>}

    <button onClick={()=>{
        setisAnimating((prevState) => (!prevState))   
    }}>
    {isAnimating ? 'Stop' : 'Start'}
    </button>
    </>)
     
  }

  export default Example;