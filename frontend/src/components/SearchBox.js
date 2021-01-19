import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './searchbox.scss'


const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5 rounded'
      ></Form.Control>
      <Button type='submit' variant='dark' className='p-2' rounded >
        Search
      </Button>
    </Form>
  )
}

export default SearchBox