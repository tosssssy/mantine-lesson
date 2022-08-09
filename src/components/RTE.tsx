import dynamic from 'next/dynamic'
import { useState } from 'react'

const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  // Disable during server side rendering
  ssr: false,

  // Render anything as fallback on server, e.g. loader or html content without editor
  loading: () => null,
})

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>'

export const RTE = () => {
  const [value, onChange] = useState(initialValue)
  return (
    <div className="grid h-screen place-items-center bg-yellow-100">
      <RichTextEditor
        value={value}
        onChange={onChange}
        sx={{ minHeight: 600 }}
      />
    </div>
  )
}
