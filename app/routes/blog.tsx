import { Outlet, useMatches } from '@remix-run/react'

import { ActionArgs, json, LoaderArgs, redirect } from '@remix-run/node'
import { useLoaderData } from 'react-router'
import { getPosts } from '~/models/post.server'
import CommentForm from '~/components/comment-form'
import { createComment } from '~/models/comment.server'
import { Badge, Button, Card, Center, Container, Grid, Group, Image, Text } from '@mantine/core'


export async function action({request, params}:ActionArgs){
  const Id = params

const formData = await request.formData()
const body = formData.get('body') as string
  const postId = formData.get('postId') as string



  if(typeof postId !== 'string'||
  typeof body !== 'string'){
      return {status: 400, body: 'Bad request'}
  }

  const comment = await createComment({
      postId,
      body,
       authorId:'clcghqxrd00006snsix42167i',

  })

 return redirect(`/blog`)



}



export default function Index() {
const matches = useMatches()
console.log(matches)
const posts = matches.map((match) => match.data)
console.log(posts[0])

// const ugh = posts[0].posts
// console.log('ugh', ugh)

  return (

    <Grid>




    <Container size="xs" px="xs">

  <Center>

  {posts[0].posts.map((post) => (<>
  <Grid.Col span={4}>

    <Card key={post.id} shadow="lg" p="lg" radius="xl"  withBorder>
  <Card.Section>
  <Image src={post.imageUrl} alt={post.title}fit="fill" mt="xs" radius="md"
    style={{ width: '100%', height: 'auto', objectFit: 'contain'  }}
    />
  </Card.Section><Group position="apart" mt="md" mb="xs">
      <Text weight={ 500 }>{post.title}</Text>
      <Badge color="pink" variant="light">
        {post.description}
      </Badge>
    </Group><Text size="sm" color="dimmed" >
      {post.body}
    </Text>
    <Center>

    </Center>

    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
      Book classic tour now
    </Button><Outlet /><CommentForm />

    <Card shadow="lg" p="lg" radius="xl"  withBorder>
      </Card>

      </Card>

      </Grid.Col>
      </>
   ))}


</Center>


</Container>

</Grid>

  );
}

