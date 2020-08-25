import { observable, action, computed } from 'mobx'
import Item from './Item'

class Inventory {
  @observable items = []
  @action addItem(name, price = 0, quantity = 1) {
    const itemToEdit = this.items.find(item => item.name === name)
    if (itemToEdit) itemToEdit.quantity += 1
    else this.items.push(new Item(name, price, quantity))
  }
  @action buyItem(name) {
    const itemToBuyIndex = this.items.findIndex(item => item.name === name)
    --this.items[itemToBuyIndex].quantity
    if (this.items[itemToBuyIndex].quantity === 0)
      this.items.splice(itemToBuyIndex, 1)
  }
  @action changePrice(name, price) {
    const itemToEdit = this.items.find(item => item.name === name)
    itemToEdit.price = price
  }
  @computed get numItems() {
    return this.items.length
  }
}

export default new Inventory()
