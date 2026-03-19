import Image from "next/image";
import { Container, Group, Text } from "@mantine/core";

export function HeaderSimple() {
  return (
    <header>
      <Group justify="center">
        <Text size="xl" fw={600}>
          UNC
        </Text>
        <Image
          src="/logo-nobg-circle.png"
          alt="UNCSJP Logo."
          width={80}
          height={80}
        />
        <Text size="xl" fw={600}>
          SJP
        </Text>
      </Group>
    </header>
  );
}
