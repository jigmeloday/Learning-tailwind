import Head from 'next/head'
import HeroComponent from '@/components/hero/hero.component';

export default function Home() {
  return (
      <div className='p-14 h-full'>
          <HeroComponent/>
      </div>
  )
}
