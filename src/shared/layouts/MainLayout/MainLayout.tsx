import { Typography } from 'antd'
import React, { FC, PropsWithChildren } from 'react'
import s from './MainLayout.module.scss'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className={s.header}>
        <Typography.Title>Shipment Form App</Typography.Title>
      </header>
      <main className={s.content}>{children}</main>
    </>
  )
}

export default MainLayout
