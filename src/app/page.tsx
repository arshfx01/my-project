import Button from "@/components/Button";

export default function Home() {
  const text = 'Connect wallet';
  return (
<div className="flex space-y-2 flex-col items-center justify-center min-h-screen p-24">
<button className="bg-blue-500 text-white rounded px-3 p-2 ">click me</button>
<div className="grid grid-cols-5 gap-4">

<Button.Root>
  <Button.Label>{text}</Button.Label>
</Button.Root>
<Button.Root intent='accent'>
  <Button.Label>{text}</Button.Label>
</Button.Root>
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
</div>
  )
}