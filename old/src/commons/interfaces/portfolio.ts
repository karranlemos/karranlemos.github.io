export interface ILink {
  privateLink: boolean
  link?: string
}

export interface ILinks {
  code: ILink
  site: ILink
}

export type BackgroundPositionType = 
  null
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'center'
  | 'left top'
  | 'left center'
  | 'left bottom'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'center top'
  | 'center center'
  | 'center bottom'