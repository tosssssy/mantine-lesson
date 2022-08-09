import { Calendar } from '@mantine/dates'
import { useState } from 'react'

export const Calendars = () => {
  const [value, setValue] = useState<Date[]>([])
  return (
    <div className="grid h-screen place-items-center bg-cyan-100">
      <Calendar
        multiple
        value={value}
        onChange={setValue}
        sx={{ background: 'white' }}
      />
    </div>
  )
}
