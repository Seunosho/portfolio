import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Technology Stack as a Frontend developer, and tools I use."
      intro="As a frontend developer with 2 years of experience building web applications, I've had the opportunity to work extensively with React, TypeScript, TailwindCSS, MongoDB, and Storybook. This page highlights my core technology stack and how I leverage these tools to create fast, modern user experiences."
    >
      <div className="space-y-20">
        <ToolsSection title="Tech Stack">
          <Tool title="TypeScript">
            I use TypeScript for its static typing and enhanced code quality.
            TypeScript allows me to catch bugs and errors during development.
            I recently added TypeScript to a React project to add types to props, state, and API responses.
          </Tool>
          <Tool title="React">
          I leverage React&apos;s composable components, hooks, and context API to build reusable UI code, manage state, and create features like patient portals, secure messaging, and displaying dynamic health records for modern healthcare web apps at startups.
          </Tool>
          <Tool title="Storybook">
            I utilize Storybook to build an isolated component library for each project.
            Storybook allows me to document components, view variants, and develop UI faster.
            For a recent e-commerce site, I used Storybook to create and customize all product display components.
          </Tool>
          <Tool title="CSS and Styling">
          Tailwind has been a gamechanger for me to style responsive layouts efficiently.
          I customize Tailwind configurations for each project including color palettes, type scales, and component variants.
          For a recent project, I created a Tailwind theme matching the client&apos;s brand guidelines.
          </Tool>
          <Tool title="MongoDB">
          I prefer MongoDB for its flexibility, scalability, and JSON-like documents.
          I have experience modeling data and structuring schemas for efficient queries.
          On a recent MERN stack project, I built an API with Node and Express to provide CRUD operations on a MongoDB database holding user profiles.
          </Tool>
        </ToolsSection>
        <ToolsSection title= "Productivity">
          <Tool title= "Reflect">
          Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.
          </Tool>
          <Tool title= "Focus">
          Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
          VS Code is my preferred IDE for its extensive extensions and ease of use.
          Some of my favorite extensions are ES7 React Snippets, Tailwind CSS IntelliSense, and MongoDB for VSCode.
          I also utilize Git directly in VS Code for version control and releasing code.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
