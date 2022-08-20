import React from 'react'
import s from './ShipmentTable.module.scss'
import { SHIPMENTS } from '_mocks/shipmentForm'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IShipment } from '../../ShipmentForm.types'

const columns: ColumnsType<IShipment> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Point A',
    dataIndex: 'pointA',
    key: 'pointA',
  },
  {
    title: 'Point B',
    dataIndex: 'pointB',
    key: 'pointB',
  },
]

const ShipmentTable = () => {
  return (
    <div>
      <h3 className={s.title}>Таблица отгрузок</h3>
      <Table
        dataSource={SHIPMENTS}
        columns={columns}
        pagination={false}
        rowSelection={{
          type: 'radio',
          onChange: (selectedRowKeys: React.Key[], selectedRows: IShipment[]) => {
            console.log('selectedRows: ', selectedRows)
          },
        }}
      />
    </div>
  )
}

export default ShipmentTable
