import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Open Price Action',
  description:
    'Price Action trading blog，trading wiki. day review,',
  href: 'https://openpriceaction.github.io/blog/',
  author: 'Open Price Action',
  locale: 'en-US',
  featuredPostCount: 5,
  postsPerPage: 10,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog/blog',
    label: 'blog',
  },
  {
    href: '/blog/tags',
    label: 'Tags',
  },
  {
    href: '/blog/authors',
    label: 'authors',
  },
  {
    href: '/blog/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/OpenPriceAction/blog',
    label: 'GitHub',
  },
  {
    href: '/blog/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
