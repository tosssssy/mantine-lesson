import {
  Box,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'

export const Form = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  return (
    <div className="grid h-screen place-items-center bg-green-100">
      <Box
        p={30}
        sx={t => ({
          maxWidth: 300,
          borderRadius: t.radius.md,
          backgroundColor: 'white',
        })}
      >
        <form onSubmit={form.onSubmit(values => console.log(values))}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />
            <PasswordInput
              placeholder="Password"
              label="Password"
              radius="md"
              required
              {...form.getInputProps('password')}
            />

            <Checkbox
              mt="md"
              label="I agree to sell my privacy"
              {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </div>
  )
}
