import { HStack, Input } from "@chakra-ui/react"
import { InputGroup } from "../ui/input-group"
import { LuUser } from "react-icons/lu"

const Demo = () => {
  return (
    <HStack gap="10" width="full">
      <InputGroup flex="1" startElement={<LuUser />}>
        <Input placeholder="Username" />
      </InputGroup>

      <InputGroup flex="1" startElement="https://">
        <Input ps="4.75em" placeholder="yoursite.com" />
      </InputGroup>
    </HStack>
  )
}