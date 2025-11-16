import type { Account, AccountsFilter } from '../types/types'
import { mockAccounts } from './mockData'

export const getAccounts = async (filters?: AccountsFilter): Promise<Account[]> => {
  try {
    const queryParams = new URLSearchParams()
    
    if (filters?.search) queryParams.append('search', filters.search)
    if (filters?.type) queryParams.append('type', filters.type)
    if (filters?.category) queryParams.append('category', filters.category)
    if (filters?.dateFrom) queryParams.append('dateFrom', filters.dateFrom)
    if (filters?.dateTo) queryParams.append('dateTo', filters.dateTo)

    const url = `/api/accounts?${queryParams}`
    console.log('Fetching from:', url)
    
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`)
    }
    
    const data = await response.json()
    
    const accounts = data.data || data || []
    return accounts.map((item: Account) => ({
      ...item,
      image: item.image || '',
    }))
    
  } catch (error) {
    console.warn('Using mock data due to error:', error)
    let filteredAccounts = mockAccounts

    if (filters?.search) {
      filteredAccounts = filteredAccounts.filter(account => 
        account.title.toLowerCase().includes(filters.search!.toLowerCase())
      )
    }
    if (filters?.type) {
      filteredAccounts = filteredAccounts.filter(account => account.type === filters.type)
    }
    if (filters?.category) {
      filteredAccounts = filteredAccounts.filter(account => account.category === filters.category)
    }
    if (filters?.dateFrom) {
      filteredAccounts = filteredAccounts.filter(account => 
        new Date(account.createdAt) >= new Date(filters.dateFrom!)
      )
    }
    if (filters?.dateTo) {
      filteredAccounts = filteredAccounts.filter(account => 
        new Date(account.createdAt) <= new Date(filters.dateTo!)
      )
    }
    
    return filteredAccounts
  }
}
export const getAccountById = async (id: number): Promise<Account | null> => {
  try {
    const response = await fetch(`/api/accounts/${id}`)
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }
    
    const data = await response.json()
    
    const accountData = data.data || data
    
    if (!accountData) return null
    return {
      ...accountData,
      image: accountData.image || '',
    }
    
  } catch (error) {
    console.warn('Using mock data due to error:', error)
    return mockAccounts.find((account) => account.id === id) || null
  }
}

export const getCartItemsCount = async (): Promise<number> => {
  try {
    const response = await fetch('/api/cash-forecasts/cart')
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }
    
    const data = await response.json()
    return data.item_count || data.count || 0
    
  } catch (error) {
    console.warn('Using mock data due to error:', error)
    return mockAccounts.filter(account => account.inCart).length
  }
}