import { Box, Button, Group, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import { ActionArgs, redirect } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import React from 'react'
import { createComment } from '~/models/comment.server'
import { prisma } from '~/models/prisma.server'




export default function CommentForm(){

    const bodyRef = React.useRef<HTMLTextAreaElement>(null);



    return (
        <Box mt='md' mb='md'>
            <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
<input
type='hidden'
name='postId'
value='clcghqxro00046snsna5iiluc'
/>

<Textarea
          label="Body"
          required
          ref={bodyRef}
          name="body"
          minRows={8}
        />
                <Group position="right" mt="md">
          <Button  type="submit">
            Submit
              </Button>
        </Group>
            </Form>

        </Box>
    )
}