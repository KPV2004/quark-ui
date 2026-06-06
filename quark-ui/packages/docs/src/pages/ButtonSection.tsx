import { Button } from '@quark-ui/react';
import { ComponentSection, DemoBlock } from '../components/ComponentSection';

export function ButtonSection() {
  return (
    <ComponentSection
      title="Button"
      description="Versatile button component with multiple variants, sizes, loading states, and full-width support. The building block of any interactive UI."
    >
      <DemoBlock 
        label="Variants"
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </DemoBlock>

      <DemoBlock 
        label="Sizes"
        code={`<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>`}
      >
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </DemoBlock>

      <DemoBlock 
        label="Loading State"
        code={`<Button variant="primary" isLoading>Loading</Button>
<Button variant="secondary" isLoading>Processing</Button>
<Button variant="outline" isLoading>Please wait</Button>`}
      >
        <Button variant="primary" isLoading>Loading</Button>
        <Button variant="secondary" isLoading>Processing</Button>
        <Button variant="outline" isLoading>Please wait</Button>
      </DemoBlock>

      <DemoBlock 
        label="Disabled"
        code={`<Button variant="primary" disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="ghost" disabled>Ghost</Button>`}
      >
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="ghost" disabled>Ghost</Button>
      </DemoBlock>

      <DemoBlock 
        label="Full Width" 
        layout="stack"
        code={`<Button variant="primary" fullWidth>Full Width Primary</Button>
<Button variant="outline" fullWidth>Full Width Outline</Button>`}
      >
        <Button variant="primary" fullWidth>Full Width Primary</Button>
        <Button variant="outline" fullWidth>Full Width Outline</Button>
      </DemoBlock>
    </ComponentSection>
  );
}

