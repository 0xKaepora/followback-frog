/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { handle } from 'frog/vercel'

const app = new Frog({
  basePath: '/api',
  imageOptions: { height: 600, width: 600 }
  // Supply a Hub API URL to enable frame verification.
  // hubApiUrl: 'https://api.hub.wevm.dev',
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  return c.res({
    image: 'https://github.com/0xKaepora/followback-frog/blob/main/public/init.jpg',
    intents: [
      <Button
        action="/progress"
        value="progress"
      >
        ENTER
      </Button>
    ]
  })
})

app.frame('/progress', (c) => {
  const { buttonValue } = c
  return c.res({
    image: 'https://github.com/0xKaepora/followback-frog/blob/main/public/in-progress.jpg',
    /* image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        Selected: {buttonValue}
      </div>
    ) */
    intents: [
      <Button
        action="/results"
        value="results"
      >
        View Results
      </Button>
    ]
  })
})

app.frame('/results', (c) => {
  const { buttonValue } = c
  return c.res({
    image: 'https://github.com/0xKaepora/followback-frog/blob/main/public/winner.jpg',
    /* image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        Selected: {buttonValue}
      </div>
    ) */
    intents: [
      <Button
        action="/"
        value="return"
      >
       View Transaction 
      </Button>,
      <Button
        action="/"
        value="return"
      >
        Play Again
      </Button>
    ]
  })
})

app.frame('/how-to', (c) => {
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        How to Play
      </div>
    ),
    intents: [
      <Button
        action="/"
        value="return"
      >
        Return
      </Button>
    ]
  })
})

export const GET = handle(app)
export const POST = handle(app)
