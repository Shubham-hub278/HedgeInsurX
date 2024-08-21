import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Layout from '@/layout'
import Welcome from '@/components/Welcome'
import Dashboard from '@/components/Dashboard'
import Insurance from '@/components/Insurance'


export default function Home() {
  return (

    <>

      <main
      >
        <Layout>
          {/* 1st Page */}
          <Welcome />
          <Dashboard />
          <Insurance />
        </Layout>
      </main>
    </>

  )
}
