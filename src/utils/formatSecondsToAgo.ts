import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(duration)
dayjs.extend(relativeTime)

export function formatSecondsToAgo(seconds: number) {
  return dayjs.duration(-seconds, 'seconds').humanize(true)
}
