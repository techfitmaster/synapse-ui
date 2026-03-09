import { cn } from '../utils/cn'

interface PaginationProps {
  page: number
  pageSize: number
  total: number
  onPageChange: (page: number) => void
  className?: string
  labels?: {
    total?: string
    page?: string
    prev?: string
    next?: string
  }
}

export function Pagination({
  page,
  pageSize,
  total,
  onPageChange,
  className,
  labels,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize)
  if (total <= pageSize) return null

  const totalLabel = labels?.total ?? 'Total {total}, Page {page}/{pages}'
  const prevLabel = labels?.prev ?? 'Prev'
  const nextLabel = labels?.next ?? 'Next'

  const summary = totalLabel
    .replace('{total}', String(total))
    .replace('{page}', String(page))
    .replace('{pages}', String(totalPages))

  return (
    <div className={cn('flex items-center justify-between border-t border-gray-200 px-4 py-3', className)}>
      <span className="text-sm text-gray-500">{summary}</span>
      <div className="flex gap-2">
        <button
          className="inline-flex h-8 items-center justify-center rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          {prevLabel}
        </button>
        <button
          className="inline-flex h-8 items-center justify-center rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          {nextLabel}
        </button>
      </div>
    </div>
  )
}
