import { ReactNode } from 'react'

const links = [
  { title: 'Home', href: '/' },
  { title: 'Subnets', href: '/subnets' },
  { title: 'Blockchain', href: '/blockchain' },
]

export const Header = ({ action }: { action?: ReactNode }) => {
  return (
    <div className="h-16 border-b-1 border-solid border-border box-border sticky top-0 z-10 bg-#191A2B">
      <div className="container m-auto h-full flex justify-between items-center">
        <div className="flex items-center font-bold cursor-pointer">
          <span className="text-xl">Comex</span>
        </div>
        <div className="flex gap-4">
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              <Button variant="link" className="text-brand font-medium">
                {link.title}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
