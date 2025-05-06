import Intents from "@/components/BadgeIntents";
import Button from "@/components/Button";
import { Code } from "@/components/Code";
import { Display } from "@/components/Display";
import { Text } from "@/components/Text";
import { Title } from "@/components/Title";
import Link from "next/link";

export default function Home() {
  const text = 'Connect wallet';
  return (
    <div className="flex space-y-2 flex-col items-center justify-center min-h-screen p-24">
      <button className="bg-blue-500 text-white rounded px-3 p-2 ">click me</button>
      <Display weight='black'>Hi, I am Arshad</Display>
      <Title>Hi, I am Arshad</Title>
      <Text >Hi, I am Arshad</Text>
      <div className="grid grid-cols-5 gap-4">
        <Button.Root>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        <Link href="/wallet">
        <Button.Root intent='accent'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        </Link>
        <Button.Root intent='danger'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        <Button.Root intent='gray'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        <Button.Root intent='info'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        <Button.Root intent='neutral'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        <Button.Root intent='primary'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        <Button.Root intent='secondary'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        <Button.Root intent='success'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        <Button.Root variant='ghost'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        <Button.Root variant='outlined'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
        <Button.Root variant='soft'>
          <Button.Label>{text}</Button.Label>
        </Button.Root>
      </div>
      <div>
        <Code intent="primary">primary</Code>
        <Code intent="secondary">secondary</Code>
        <Code intent="accent">accent</Code>
        <Code intent="gray">gray</Code>
        <Code intent="neutral">neutral</Code>
      </div>
      <div>
        <Intents />
      </div>
      <div>
      <button className="bg-blue-800 text-blue-200 rounded-full px-4  py-2 font-medium transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Click Me
</button>
      </div>
    </div>
  )
}