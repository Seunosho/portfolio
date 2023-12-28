import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon} from '@/components/SocialIcons'
import developerimages  from '@/images/photos/developer.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Seun, I live in Texas where I develop responsive web applications, that impacts the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={developerimages}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I&apos;m Seun Osho. I live in Texas, where I develop progressive web applications that shapes the future of healthcare.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I develop progressive web applications that shapes the future of healthcare. With several years of experience in web development, I have honed my skills in React, Tailwind, and TypeScript to build smooth, responsive interfaces optimized for modern platforms.
            </p>
            <p>
            In my spare time, I enjoy cooking and experimenting with new recipes. There&apos;s something satisfying about combining fresh ingredients to create a delicious meal. I also love settling in to watch a good sci-fi or action movie. Getting immersed in an imaginative world of the future is a great way to relax. Whenever I can, I like to read futuristic and visionary fiction books. It is fascinating to think about how today&apos;s visionary ideas could become tomorrow&apos;s reality.
            </p>
            <p>
            I thrive on staying ahead of the latest web development trends and techniques. I am constantly learning, reading programming books and blogs, and experimenting with new frameworks and libraries. I believe this curiosity and drive to expand my knowledge is what makes me skilled at creating progressive web apps that shape the healthcare industry&apos;s future.
            </p>
            <p>
            Overall, web development gives me an outlet to take my creativity and problem-solving skills and build something meaningful. I find it extremely rewarding to see my code come to life in practical applications that have a positive impact. I&apos;m excited to continue growing as a developer and creating progressive healthcare solutions that drive the industry forward.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="oshodorcas@yahoo.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              
             >
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
