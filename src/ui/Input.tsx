import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '../utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputEl = (
      <input
        ref={ref}
        id={id}
        className={cn(
          'flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm leading-6 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
          className,
        )}
        {...props}
      />
    )

    if (!label && !error) return inputEl

    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        {inputEl}
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'
