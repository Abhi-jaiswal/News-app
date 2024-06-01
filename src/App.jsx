import React from 'react'
import Headlines from './components/Headlines'
import Footer from './components/Footer'
import Content from './components/Content'
export default function App() {
  return (
    <div className="w-full h-screen flex flex-col relative overflow-x-hidden items-center">
      <h1 className='mt-10 text-3xl text-bold'>News App</h1>

      <div className='flex m-6'>
        <Content/>
        <Headlines/>
      </div>
      <Footer/>
    </div>
  )
}
