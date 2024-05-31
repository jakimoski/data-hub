export type TSection = {
  children: React.ReactNode;
};

export default function SectionBlock({ children }: TSection) {
  return <section className="section-block">{children}</section>;
}
