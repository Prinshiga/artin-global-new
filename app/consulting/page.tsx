import type { Metadata } from "next";
import ConsultingPage from "@/components/consulting/ConsultingPage";

export const metadata: Metadata = {
  title: "Consulting | Artin Global",
};

export default function Page() {
  return <ConsultingPage />;
}
