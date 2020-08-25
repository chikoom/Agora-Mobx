import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import { render } from '@testing-library/react'
import Item from './Item'

const Market = inject('inventory')(
  observer(props => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = e => {
      setInputValue(e.target.value)
    }
    const addItem = e => {
      if (e.key === 'Enter') {
        props.inventory.addItem(inputValue)
        setInputValue('')
      }
    }
    const { items } = props.inventory
    return (
      <div>
        <div>Total number of items: {props.inventory.numItems}</div>
        <input
          onChange={handleInputChange}
          onKeyDown={addItem}
          value={inputValue}
          placeholder='Enter new item'
          type='text'
        />
        <div className='Items'>
          {items.map(item => (
            <Item item={item} />
          ))}
        </div>
      </div>
    )
  })
)

export default Market
