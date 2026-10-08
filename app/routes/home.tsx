import { Container } from "~/components/ui/container";

export function meta() {
  return [
    { title: "Sebastian Bergen – Portfolio" },
    { name: "description", content: "Portfolio von Sebastian Bergen, Web Developer." },
  ];
}

export default function Home() {
  return (
    <Container className="pt-16">
      <h1 className="text-3xl font-semibold">Sebastian Bergen</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Portfolio – im Aufbau.</p>
    </Container>
  );
}
