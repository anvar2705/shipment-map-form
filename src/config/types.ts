export interface IRoute {
  path?: string
  element: JSX.Element
  isProtected?: boolean
  routes?: IRoute[]
}
