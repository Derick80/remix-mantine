import { json, LoaderArgs } from '@remix-run/node'
import { Outlet, useLoaderData } from 'react-router'
import { getPosts } from '~/models/post.server'
export async function loader({request}:LoaderArgs){
  const posts = await getPosts()
  return json({posts})
}

export default function Index() {
  const data = useLoaderData() as {posts: {id: number, title: string, body: string}[]}
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
  dfadf

    </div>
  );
}
