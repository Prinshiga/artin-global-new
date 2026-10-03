import type { Metadata } from "next";
import ContentPage from "@/components/content/ContentPage";

export const metadata: Metadata = {
  title: "Content | Artin Global",
};

export default function Page() {
  return <ContentPage />;
}
