import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { Principles } from "@/components/sections/principles";
import { Expertise } from "@/components/sections/expertise";
import { Solutions } from "@/components/sections/solutions";
import { OperationGallery } from "@/components/sections/operation-gallery";
import { Founders } from "@/components/sections/founders";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Commitment } from "@/components/sections/commitment";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Principles />
      <Expertise />
      <Solutions />
      <OperationGallery />
      <Founders />
      <Ecosystem />
      <Commitment />
      <Contact />
    </>
  );
}
