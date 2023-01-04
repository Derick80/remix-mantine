import { Navbar } from '@mantine/core'
import { HeaderResponsive } from './nav-bar'



export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="layout">
        <HeaderResponsive links={[
            { link: '/', label: 'Home' },
            { link: '/blog', label: 'blog' },
            { link: '/beta', label: 'beta' },
            { link: '/travel', label: 'travel' },
            { link: '/user', label: 'user' },
            ]} />

      <main>{children}</main>
    </div>
  );
}