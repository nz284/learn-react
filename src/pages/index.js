// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import React from 'react'
import styles from '@/styles/Home.module.css'
import RequestTracker from './qcomps/shoppingCart'





export default function Home() {
  return (
    <div className={styles.main}>
        <h1>My List</h1>
      <RequestTracker />
    </div>
  )
}
