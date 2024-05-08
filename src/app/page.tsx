import { Metadata } from 'next'
import { META_DATA } from "@/constants/common";
import TerminalComponents from "@/components/Terminal";
// either Static metadata
export const metadata: Metadata = {
  title: META_DATA.title,
}
export default function Home() {
  return <TerminalComponents />;
}
