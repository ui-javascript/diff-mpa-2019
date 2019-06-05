export class AllData<T> {
  result: Array<T>
  total: number
}

export class QueryForm {
  name: string = null
  remark: string = null
  currentPageIndex: number = 1
  pageSize: number = 10
  sortBy: string = null
  sortField: string = null
}

export class SampleForm {
  id: string = null
  name: string = null
  remark: string = null
}
