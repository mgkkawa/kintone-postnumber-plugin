const HEAD = 'app.record'
const MOBILE = 'mobile.'
const INDEX = '.index'
const DETAIL = '.detail'
const CREATE = '.create'
const EDIT = '.edit'
const SHOW = '.show'
const CHANGE = '.change'
const SUBMIT = '.submit'
const SUCCESS = '.success'

const eventMap = (event: string | string[], end: string, isMobile: boolean = false): string[] => {
  // console.log(event, end, isMobile)

  if (typeof event === 'string') event = [event]
  const result = isMobile ? event.map(e => MOBILE + HEAD + e + end) : event.map(e => HEAD + e + end)
  // if (isMobile) return event.map(e => MOBILE + HEAD + e + end)
  // return event.map(e => HEAD + e + end)
  // console.log(result)
  return result
}

export default {
  index: {
    show: (isMobile: boolean = false): string[] => eventMap(INDEX, SHOW, isMobile),
  },
  detail: {
    show: (isMobile: boolean = false): string[] => eventMap(DETAIL, SHOW, isMobile),
  },
  create: {
    show: (isMobile: boolean = false): string[] => eventMap(CREATE, SHOW, isMobile),
    change: (fieldCd: string, isMobile: boolean = false): string[] =>
      eventMap(CREATE, CHANGE + '.' + fieldCd, isMobile),
    submit: (isMobile: boolean = false): string[] => eventMap(CREATE, SUBMIT, isMobile),
    success: (isMobile: boolean = false): string[] => eventMap(CREATE, SUBMIT + SUCCESS, isMobile),
  },
  edit: {
    show: (isMobile: boolean = false): string[] => eventMap(EDIT, SHOW, isMobile),
    change: (fieldCd: string, isMobile: boolean = false): string[] => eventMap(EDIT, CHANGE + '.' + fieldCd, isMobile),
    submit: (isMobile: boolean = false): string[] => eventMap(EDIT, SUBMIT, isMobile),
    success: (isMobile: boolean = false): string[] => eventMap(EDIT, SUBMIT + SUCCESS, isMobile),
  },
  credit: {
    show: (isMobile: boolean = false): string[] =>
      eventMap(CREATE, SHOW, isMobile).concat(eventMap(EDIT, SHOW, isMobile)),
    change: (fieldCd: string, isMobile: boolean = false): string[] =>
      eventMap(CREATE, CHANGE + '.' + fieldCd, isMobile).concat(eventMap(EDIT, CHANGE + '.' + fieldCd, isMobile)),
    submit: (isMobile: boolean = false): string[] =>
      eventMap(CREATE, SUBMIT, isMobile).concat(eventMap(EDIT, SUBMIT, isMobile)),
    success: (isMobile: boolean = false): string[] =>
      eventMap(CREATE, SUBMIT + SUCCESS, isMobile).concat(eventMap(EDIT, SUBMIT + SUCCESS, isMobile)),
  },
}
