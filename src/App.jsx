import React from 'react'
import Header from './components/Header'
import InputForm from './components/InputForm'

const App = () => {
  return (
    <div className='max-w-[720px] flex flex-col mx-auto'>
    <Header />
    <InputForm />
    </div>
  )
}

export default App