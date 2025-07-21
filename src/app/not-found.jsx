import { Heading, Paragraph } from "@/components/ui/typography";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Heading level="h1" className="text-Primary mb-4 font-semibold">404</Heading>
      <Heading level="h2" className="text-Secondary mb-4 font-bold">Page Not Found</Heading>
      <Paragraph className="text-Grey mb-6">
        Sorry, the page you are looking for does not exist.
      </Paragraph>
      <Link href="/" className="text-Primary underline">
        <Paragraph size="normal">Go back to Home</Paragraph>
      </Link>
    </div>
  );
}
