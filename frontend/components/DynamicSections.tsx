'use client';
import React, { useState } from 'react';
import { DynamicSection } from './DynamicSection';
import { Navbar } from './Navbar';

interface Props {
  children: React.ReactNode;
  sectionsTitles: string[];
}

export function DynamicSections({ sectionsTitles, children }: Props) {
  const [selectedSection, setSelectedSection] = useState(0);

  const renderChildren = React.Children.map(children, (child, index) => {
    return (
      <DynamicSection
        key={index}
        index={index}
        selectedSection={selectedSection}
        title={sectionsTitles[index]}
      >
        {child}
      </DynamicSection>
    );
  });
  return (
    <div className="flex flex-col h-full w-[90vw]">
      <Navbar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <div>{renderChildren}</div>
    </div>
  );
}
