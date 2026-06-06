import { createMetadata } from "@/lib/metadata";
import ContactForm from "./ContactForm";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Horizon Building Company to schedule a consultation. We work with property owners, developers, and investors across Los Angeles and Southern California.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
