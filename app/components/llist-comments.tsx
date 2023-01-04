import { Group, Button, Paper, Box, Avatar } from '@mantine/core'
import { useState } from 'react'
import CommentForm from './comment-form'

function CommentActions({
    commentId,
    replyCount,
  }: {
    commentId: string;
    replyCount: number;
  }) {
    const [replying, setReplying] = useState(false);

    return (
      <>
        <Group position="apart" mt="md">
          <Text>{getReplyCountText(replyCount)}</Text>
          <Button onClick={() => setReplying(!replying)}>Reply</Button>
        </Group>

        {replying && <CommentForm parentId={commentId} />}
      </>
    );
  }

  function Comment({ comment }: { comment: CommentWithChildren }) {
    return (
      <Paper withBorder radius="md" mb="md" p="md">
        <Box
          sx={() => ({
            display: "flex",
          })}
        >
          <Avatar />

          <Box
            pl="md"
            sx={() => ({
              display: "flex",
              flexDirection: "column",
            })}
          >
            <Group>
              <Text>{comment.user.name}</Text>
              <Text>{comment.createdAt.toISOString()}</Text>
            </Group>

            {comment.body}
          </Box>
        </Box>

        <CommentActions
          commentId={comment.id}
          replyCount={comment.children.length}
        />

        {comment.children && comment.children.length > 0 && (
          <ListComments comments={comment.children} />
        )}
      </Paper>
    );
  }

  function ListComments({ comments }: { comments: Array<CommentWithChildren> }) {
    return (
      <Box>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </Box>
    );
  }

  export default ListComments;