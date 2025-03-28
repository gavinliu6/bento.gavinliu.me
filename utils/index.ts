import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

export const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

export const isExternalUrl = (url: string) => EXTERNAL_URL_RE.test(url)

export const now = () => {
  dayjs.extend(utc)
  dayjs.extend(timezone)

  return dayjs().tz('Asia/Shanghai').format('ddd, MMM D, YYYY H:mm')
}
