import * as React from 'react'
import { Toolbar as ToolbarPrimitive } from 'radix-ui'
import { cn } from '../utils/cn'

function Toolbar({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Root>) {
  return (
    <ToolbarPrimitive.Root
      data-slot="toolbar"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

function ToolbarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Separator>) {
  return (
    <ToolbarPrimitive.Separator
      data-slot="toolbar-separator"
      className={cn("mx-1 h-5 w-px shrink-0 bg-border", className)}
      {...props}
    />
  )
}

export { Toolbar, ToolbarSeparator }
