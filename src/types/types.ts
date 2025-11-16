export interface Account {
  id: number
  code: string
  title: string
  description: string
  type: string
  category: string
  image: string
  inCart?: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface AccountsFilter {
  search?: string      
  type?: string          
  category?: string      
  dateFrom?: string      
  dateTo?: string
}