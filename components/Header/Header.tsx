import Image from "next/image";
import { Group, Title } from "@mantine/core";

export function HeaderSimple() {
  return (
    <header>
      <Group justify="center">
        <Title order={1}>
          UNC
        </Title>
        <Image
          src="/logo-nobg-circle.png"
          alt="UNCSJP's Logo"
          width={80}
          height={80}
        />
        <Title order={1}>
          SJP
        </Title>
      </Group>
    </header>
  );
}
