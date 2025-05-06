import React from 'react'
import Avatar from '../Avatar'
import { Code } from '../Code'
import { ArrowUp, ArrowUpCircle, ArrowUpIcon, BuildingIcon, Copy, Landmark, Power, QrCode, Settings } from 'lucide-react'
import Button from '../Button'
import { Title } from '../Title'
import Badge from '../Badge'

type Props = {}

const DrawerContent = (props: Props) => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
                <div className='items-center flex gap-2'>
                        {/** avatar */}
                        <Avatar.Root status='online' bottomStatus={true} >
                                <Avatar.Fallback intent='accent'  variant='soft'>AR</Avatar.Fallback>
                        </Avatar.Root>
                        <Code intent="accent" className='flex gap-1'>0xCab3...4A04 <Copy width={15} /></Code>
                </div>
                <div className='flex gap-2'>
                        {/** disconnect button */}
                        <Button.Root intent='neutral' variant='soft' className='rounded-full'>
                                <Button.Icon><Settings /></Button.Icon>
                        </Button.Root>
                        <Button.Root intent='danger' variant='soft' className='rounded-full'>
                                <Button.Icon><Power /></Button.Icon>
                        </Button.Root>
                </div>
        </div>

        <div className='flex flex-col gap-2  justify-center items-center text-center'>
                <Title className='text-5xl tracking-tighter'>$270<span className='text-neutral-600'>.56</span></Title>
                <Badge intent='accent' variant='outlined' className='flex gap-2 items-center' ><ArrowUpIcon size={18} /> 0.52%</Badge>
        </div>

        <div className='grid grid-cols-2 gap-2'>
                <div className='p-4 border  hover:rounded-3xl bg-[#000] rounded-lg flex flex-col gap-2'>
                        <Landmark />
                        <Title>Buy</Title>
                </div>
                <div className='p-4 border bg-[#000] hover:rounded-3xl rounded-lg flex flex-col gap-2'>
                        <QrCode />
                        <Title>Recieve</Title>
                </div>

        </div>
    </div>
  )
}

export default DrawerContent