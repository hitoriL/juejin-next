import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import RightSideBar from '@/components/RightSideBar'

const inter = Inter({ subsets: ['latin'] })

import Layout from '@/components/Layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>稀土掘金</title>
        <meta name="description" content="掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。" />
        <meta name="keywords" content="掘金,稀土,Vue.js,前端面试题,Kotlin,ReactNative,Python" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/juejinlogo.svg" />
      </Head>
      <main className={styles.main}>
        <h1>
        这是掘金主页！！！
        </h1>
        <RightSideBar />
      </main>

    </>
  )
}
