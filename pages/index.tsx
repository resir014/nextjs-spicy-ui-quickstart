import * as React from 'react'
import { NextPage } from 'next'

import { Heading, Stack, Text } from '@spicy-ui/core'

const IndexPage: NextPage = () => (
  <Stack as="main" spacing={4}>
    <Stack spacing={2}>
      <Heading as="h1" variant="h1" m={0}>
        Hey, hot stuff! 🌶️
      </Heading>
      <Text variant="2xl">Welcome to the spicy-ui example.</Text>
    </Stack>
    <Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt vero id mollitia asperiores. Eius voluptates incidunt modi magnam
      aut veritatis maiores tempore impedit neque corporis molestiae at tenetur, architecto expedita.
    </Text>
  </Stack>
)

export default IndexPage
