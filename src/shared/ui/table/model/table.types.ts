export type TTableAction = 'delete' | 'edit'

export interface ITableActionData {
  action: TTableAction
  elementId: number
}

interface ITableElement {
  code?: string | number
  align?: 'left' | 'right' | 'center'
}
export interface ITableHeadElement extends ITableElement {
  title: string
  extraType?: 'actions'
}
export interface ITableBodyElement<TContent = string> extends ITableElement {
  content: TContent
  elementId?: string | number
}

export type TTableHead = ITableHeadElement[]
export type TTableBody<TContent> = ITableBodyElement<TContent>[][]

export interface ITableData<TContent> {
  head: TTableHead
  body: TTableBody<TContent>
  styles: ITableStyles
}

export interface ITableStyles {
  [key: string]: string
}
