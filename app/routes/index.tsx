import { json, LoaderArgs } from '@remix-run/node'
import { Outlet, useLoaderData } from 'react-router'
import { getPosts } from '~/models/post.server'
export async function loader({request}:LoaderArgs){
  const posts = await getPosts()
  return json({posts})
}

export default function Index() {

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Outlet />
hi
    </div>
  );
}
