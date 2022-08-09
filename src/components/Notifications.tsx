import { Notification, Stack } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons'

export const Notifications = () => {
  return (
    <div className="grid h-screen place-items-center bg-purple-100">
      <Stack>
        <Notification title="Default notification">
          This is default notification with title and body
        </Notification>

        <Notification
          icon={<IconCheck size={18} />}
          color="teal"
          title="Teal notification"
        >
          This is teal notification with icon
        </Notification>

        <Notification icon={<IconX size={18} />} color="red">
          Bummer! Notification without title
        </Notification>
      </Stack>
    </div>
  )
}
