import React from "react";

const SectionDivider: React.FC = () => (
  <div className="w-full max-w-4xl mx-auto px-6">
    <div className="flex items-center gap-4 my-4">
      <div className="flex-1 h-px border-t border-dashed border-text-ink/20" />
      <span className="text-accent-terracotta/60 text-xs select-none">◆</span>
      <div className="flex-1 h-px border-t border-dashed border-text-ink/20" />
    </div>
  </div>
);

export default SectionDivider;
