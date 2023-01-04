import { Box } from "@mantine/core";
import CommentForm from './comment-form'
import ListComments from './llist-comments'


function CommentSection() {



  return (
    <Box>
      <CommentForm />
      {data && <ListComments comments={data} />}
    </Box>
  );
}

export default CommentSection;