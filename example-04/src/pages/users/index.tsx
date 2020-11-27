import React from 'react'
import { GetServerSideProps } from 'next'

import { api } from '../../services/api'

// import { Container } from './style'

interface UsersProps {
  _id: string
  name: string
  email: string
}

interface ItemsProps {
  items: UsersProps[]
}

const Users = ({ items }: ItemsProps) => {

  return (
    <>
      <h1>List Users</h1>
      { items.map((user: UsersProps) => {
        return (
          <ul key={ user._id }>
            <li>{ user.name }</li>
          </ul>
        )
      }) }
    </>

  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/api/users')
  const items: UsersProps = data

  return {
    props: { items }
  }
}


export default Users