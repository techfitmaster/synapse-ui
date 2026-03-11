/**
 * 日期时间格式化
 * @param dt ISO 日期字符串或时间戳
 * @returns 格式化后的中文日期时间字符串（零填充），无值返回 '-'
 */
export function formatDateTime(dt: string | number | undefined | null): string {
  if (!dt) return '-'
  return new Date(dt).toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

/**
 * 金额数字格式化（不带货币符号）
 * @param amount 金额数值或字符串
 * @param decimals 小数位数，默认 2
 * @returns 格式化后的金额字符串，如 "1234.56"
 */
export function formatAmount(amount: number | string | undefined | null, decimals = 2): string {
  if (amount == null || amount === '') return '0.00'
  const num = typeof amount === 'string' ? parseFloat(amount) : amount
  if (isNaN(num)) return '0.00'
  return num.toFixed(decimals)
}

/**
 * 货币格式化（带 ¥ 符号）
 * @param amount 金额数值或字符串
 * @param decimals 小数位数，默认 2
 * @returns 格式化后的货币字符串，如 "¥1,234.56"
 */
export function formatMoney(amount: number | string | undefined | null, decimals = 2): string {
  if (amount == null || amount === '') return '¥0.00'
  const num = typeof amount === 'string' ? parseFloat(amount) : amount
  if (isNaN(num)) return '¥0.00'
  return `¥${num.toLocaleString('zh-CN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`
}
