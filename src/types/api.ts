export interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
  trace_id?: string
}

export interface PaginatedData<T> {
  list: T[]
  records?: T[]
  total: number
  page: number
  pageSize: number
  size?: number
}

/**
 * Normalize paginated response to a consistent shape.
 * Handles both `list` and `records` field names.
 */
export function normalizePaginated<T>(raw: Partial<PaginatedData<T>>): PaginatedData<T> {
  const items = raw.list ?? raw.records ?? []
  return {
    list: items,
    records: items,
    total: raw.total ?? 0,
    page: raw.page ?? 1,
    pageSize: raw.pageSize ?? raw.size ?? 20,
  }
}
