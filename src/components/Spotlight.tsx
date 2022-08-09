import { Button, Group } from '@mantine/core'
import { openSpotlight, SpotlightProvider } from '@mantine/spotlight'

import type { SpotlightAction } from '@mantine/spotlight'
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from '@tabler/icons'

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <IconHome size={18} />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <IconDashboard size={18} />,
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size={18} />,
  },
]
export const Spotlight = () => {
  return (
    <div className="grid h-screen place-items-center bg-pink-100">
      <SpotlightProvider
        actions={actions}
        searchIcon={<IconSearch size={18} />}
        searchPlaceholder="Search..."
        shortcut="mod + shift + 1"
        nothingFoundMessage="Nothing found..."
      >
        <Group position="center">
          <Button onClick={openSpotlight as any}>Open spotlight</Button>
        </Group>
      </SpotlightProvider>
    </div>
  )
}
