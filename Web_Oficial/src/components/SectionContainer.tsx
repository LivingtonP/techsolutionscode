import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

const SectionContainer: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
}) => (
  <section
    id={id}
    data-section={id}
    className={`section ${className} scroll-m-20 w-full mx-auto container md:max-w-5xl`}
  >
    {children}
  </section>
);

export default SectionContainer;
