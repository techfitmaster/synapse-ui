# @818/shared

818 游戏平台前端共享组件库。为 admin、portal 等前端项目提供统一的 UI 组件和基础设施。

## 技术栈

- React 18/19 + TypeScript 5
- Radix UI 原语组件
- shadcn/ui v4（new-york 变体）官方源码
- Tailwind CSS（clsx + tailwind-merge）
- class-variance-authority（组件变体）

## UI 组件

所有 UI 组件基于 shadcn/ui v4 官方源码，使用 Radix UI 原语实现：

| 组件 | 说明 |
|------|------|
| Button | 按钮（default/destructive/outline/ghost + loading + asChild） |
| Badge | 徽章（default/success/warning/danger/secondary） |
| Card | 卡片（Card/CardHeader/CardTitle/CardContent） |
| Input | 输入框（含 error 提示） |
| Dialog | 对话框 |
| Select | 下拉选择 |
| Tabs | 标签页（default/line 变体，支持水平/垂直方向） |
| Switch | 开关 |
| Checkbox | 复选框 |
| RadioGroup | 单选组 |
| Avatar | 头像（Image + Fallback） |
| Accordion | 手风琴折叠面板 |
| DropdownMenu | 下拉菜单 |
| AlertDialog | 确认对话框 |
| ScrollArea | 滚动区域 |
| Separator | 分隔线 |
| Table | 表格 |
| Textarea | 多行文本 |
| AspectRatio | 宽高比容器 |
| Toolbar | 工具栏 |

## 共享基础设施

| 模块 | 说明 |
|------|------|
| `createClient` | Axios API 工厂（拦截器、错误处理、Token 管理） |
| `createAuthStore` | Zustand 认证 store 工厂（登录/登出/Token 持久化） |
| `I18nProvider` + `useT` | 国际化方案 |
| `cn` | clsx + tailwind-merge 样式合并工具 |

## 共享组件

| 组件 | 说明 |
|------|------|
| `DataTable` | TanStack Table 封装 + legacy `Column<T>` adapter + 分页 |
| `ErrorBoundary` | React 错误边界 |
| `Pagination` | 分页组件 |

## 安装与使用

### 作为 git submodule

```bash
# 在 monorepo 中已配置为 submodule
git submodule update --init packages/shared

# 安装依赖
cd packages/shared && npm install
```

### 在项目中引用

```json
// package.json
{
  "dependencies": {
    "@818/shared": "file:../packages/shared"
  }
}
```

### Tailwind CSS 配置

在消费项目的 `tailwind.config.ts` 中包含 shared 源码路径：

```ts
content: [
  './src/**/*.{ts,tsx}',
  '../packages/shared/src/**/*.{ts,tsx}',
]
```

### 导入使用

```tsx
import { Button, Badge, Card, cn } from '@818/shared'
import { I18nProvider, useT } from '@818/shared'
import { createClient } from '@818/shared'
```

## Peer Dependencies

| 包 | 版本 | 必需 |
|---|------|------|
| react | ^18.3 \|\| ^19.0 | 是 |
| react-dom | ^18.3 \|\| ^19.0 | 是 |
| axios | ^1.7 | 是 |
| zustand | ^5.0 | 是 |
| lucide-react | >=0.300 | 可选 |
| @tanstack/react-table | ^8.20 | 可选 |

## 类型兼容

如遇 React 类型冲突，运行类型链接脚本：

```bash
bash scripts/link-types.sh
```
