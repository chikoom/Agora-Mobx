import React from 'react'
import { observer, inject } from 'mobx-react'
import { render } from '@testing-library/react'

const Item = inject('inventory')(
  observer(props => {
    const buyItem = () => {
      props.inventory.buyItem(props.item.name)
    }
    const editPrice = () => {
      const newPrice = prompt('Enter New Price')
      props.inventory.changePrice(props.item.name, newPrice)
    }
    const { item } = props
    const suffix = item.quantity > 1 ? 's' : ''
    return (
      <li>
        <div
          onDoubleClick={editPrice}
        >{`${item.quantity} ${item.name}${suffix} available at $${item.price} per item`}</div>
        <button onClick={buyItem}>BUY</button>
      </li>
    )
  })
)
export default Item
