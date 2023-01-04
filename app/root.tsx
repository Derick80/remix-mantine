import { AppShell, createEmotionCache, MantineProvider } from '@mantine/core'
import { StylesPlaceholder } from '@mantine/remix'
import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import Layout from './components/layout'
import { getPosts } from './models/post.server'
import { theme } from './theme'

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
createEmotionCache({ key: 'mantine' });

export async function loader({request}:LoaderArgs){
  const posts = await getPosts()
  return json({posts})
}


export default function App() {
  const posts = useLoaderData() as {posts: {id: number, title: string, body: string}[]}
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>


          <Layout >
          <Outlet />
`

          </Layout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}