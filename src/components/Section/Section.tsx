export type TSection = {
  children: React.ReactNode;
};

export default function Section({ children }: TSection) {
  return <section className="section">{children}</section>;
}
