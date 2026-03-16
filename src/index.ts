// Utils
export { cn } from './utils/cn'
export { formatDateTime, formatAmount, formatMoney } from './utils/formatters'

// Types
export type { ApiResponse, PaginatedData } from './types/api'
export { normalizePaginated } from './types/api'

// API
export { createClient, type CreateClientOptions, type TypedClient } from './api/createClient'

// Store
export { createAuthStore, type AuthState, type CreateAuthStoreOptions } from './store/createAuthStore'

// i18n
export { I18nProvider, I18nContext, type I18nContextValue } from './i18n/provider'
export { useT } from './i18n/useT'
export type { Locale, TranslationDict, Translations } from './i18n/types'

// UI Components
export { Button, type ButtonProps } from './ui/Button'
export { Badge, type BadgeProps } from './ui/Badge'
export { Card, CardHeader, CardTitle, CardContent } from './ui/Card'
export { Input, type InputProps } from './ui/Input'
export { Textarea, type TextareaProps } from './ui/Textarea'
export {
  dialogCloseIcon,
  Dialog, DialogClose, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
  SimpleDialog,
} from './ui/Dialog'
export {
  Select, SelectContent, SelectField, SelectGroup, SelectItem,
  SelectLabel, SelectSeparator, SelectTrigger, SelectValue,
  type SelectOption,
} from './ui/Select'
export {
  DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal,
  DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator,
  DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent,
  DropdownMenuSubTrigger, DropdownMenuTrigger,
} from './ui/DropdownMenu'
export { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
export { Switch } from './ui/Switch'
export { Checkbox } from './ui/Checkbox'
export {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger,
} from './ui/AlertDialog'
export { ScrollArea, ScrollBar } from './ui/ScrollArea'
export { Separator } from './ui/Separator'
export {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from './ui/Table'
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/Accordion'
export { AspectRatio } from './ui/AspectRatio'
export { RadioGroup, RadioGroupItem } from './ui/RadioGroup'
export { Toolbar, ToolbarSeparator } from './ui/Toolbar'
export { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar'

// Components
export { ErrorBoundary } from './components/ErrorBoundary'
export { DataTable, type Column } from './components/DataTable'
export { Pagination } from './components/Pagination'

// Hooks
export { usePagination } from './hooks/usePagination'
