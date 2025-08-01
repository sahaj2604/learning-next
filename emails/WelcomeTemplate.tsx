import React from 'react'
import {Html,Body,Container, Preview, Text} from '@react-email/components'
import Link from 'next/link'
const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
      <Preview>Welcome abroad!</Preview>
      <Body>
        <Container>
            <Text>Hello {name}</Text>
            <Link href={'https://google.com'}>google</Link>
        </Container>
      </Body>
    </Html>
  )
}

export default WelcomeTemplate
