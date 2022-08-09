import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
} from '@mantine/core'
import {
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
  IconReceiptRefund,
  IconReceipt,
  IconReceiptTax,
  IconReport,
  IconCashBanknote,
  IconCoin,
} from '@tabler/icons'

const mockdata = [
  { title: 'Credit cards', icon: IconCreditCard, color: 'violet' },
  { title: 'Banks nearby', icon: IconBuildingBank, color: 'indigo' },
  { title: 'Transfers', icon: IconRepeat, color: 'blue' },
  { title: 'Refunds', icon: IconReceiptRefund, color: 'green' },
  { title: 'Receipts', icon: IconReceipt, color: 'teal' },
  { title: 'Taxes', icon: IconReceiptTax, color: 'cyan' },
  { title: 'Reports', icon: IconReport, color: 'pink' },
  { title: 'Payments', icon: IconCoin, color: 'red' },
  { title: 'Cashback', icon: IconCashBanknote, color: 'orange' },
] as const

const useStyles = createStyles(theme => ({
  card: {
    width: '500px',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontSize: 30,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}))

export const Services = () => {
  const { classes, theme } = useStyles()

  const items = mockdata.map(item => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ))

  return (
    <div className="grid h-screen place-items-center bg-blue-100">
      <Card withBorder radius="xl" className={classes.card} p={40}>
        <Group position="apart">
          <Text className={classes.title}>Services</Text>
          <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
            + 21 other services
          </Anchor>
        </Group>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    </div>
  )
}
