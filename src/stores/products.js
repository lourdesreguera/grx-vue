import { ref } from 'vue'
import { defineStore } from 'pinia'
import items1 from '@/components/items1.js'
import items2 from '@/components/items2.js'
import itemsDetail from '@/components/itemsDetail.js'

export const useProductsStore = defineStore('products', () => {
  const items = ref([...items1, ...items2, ...itemsDetail])

  const findItem = (id) => items.value.find((item) => item.id == id)

  return { items, findItem }
})
