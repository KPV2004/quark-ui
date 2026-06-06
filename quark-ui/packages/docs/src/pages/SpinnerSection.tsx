import { Spinner } from '@quark-ui/react';
import { ComponentSection, DemoBlock } from '../components/ComponentSection';

export function SpinnerSection() {
  return (
    <ComponentSection
      title="Spinner"
      description="Loading indicator component with customizable size and color. Use to communicate that content or actions are being processed."
    >
      <DemoBlock 
        label="Sizes"
        code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`}
      >
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </DemoBlock>

      <DemoBlock 
        label="Colors"
        code={`<Spinner color="#7c3aed" />
<Spinner color="#22c55e" />
<Spinner color="#3b82f6" />`}
      >
        <Spinner color="#7c3aed" />
        <Spinner color="#22c55e" />
        <Spinner color="#3b82f6" />
        <Spinner color="#f59e0b" />
        <Spinner color="#ef4444" />
        <Spinner color="#ec4899" />
      </DemoBlock>

      <DemoBlock 
        label="In Context"
        code={`<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
  <Spinner size="sm" />
  <span>Loading data...</span>
</div>`}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          color: 'var(--qk-text-2)',
          fontSize: 14,
        }}>
          <Spinner size="sm" />
          <span>Loading data...</span>
        </div>
      </DemoBlock>
    </ComponentSection>
  );
}

