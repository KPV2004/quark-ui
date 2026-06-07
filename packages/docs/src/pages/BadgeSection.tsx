import { Badge } from '@kpv2004/quark-ui';
import { ComponentSection, DemoBlock } from '../components/ComponentSection';

export function BadgeSection() {
  return (
    <ComponentSection
      title="Badge"
      description="Compact label component for status indicators, counts, and categorization. Available in multiple color variants and styles."
    >
      <DemoBlock 
        label="Variants"
        code={`<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="info">Info</Badge>`}
      >
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
      </DemoBlock>

      <DemoBlock 
        label="Sizes"
        code={`<Badge variant="primary" size="sm">Small</Badge>
<Badge variant="primary" size="md">Medium</Badge>
<Badge variant="primary" size="lg">Large</Badge>`}
      >
        <Badge variant="primary" size="sm">Small</Badge>
        <Badge variant="primary" size="md">Medium</Badge>
        <Badge variant="primary" size="lg">Large</Badge>
      </DemoBlock>

      <DemoBlock 
        label="Dot Badges"
        code={`<Badge variant="success" dot>Online</Badge>
<Badge variant="warning" dot>Idle</Badge>
<Badge variant="danger" dot>Offline</Badge>
<Badge variant="info" dot>Syncing</Badge>`}
      >
        <Badge variant="success" dot>Online</Badge>
        <Badge variant="warning" dot>Idle</Badge>
        <Badge variant="danger" dot>Offline</Badge>
        <Badge variant="info" dot>Syncing</Badge>
      </DemoBlock>

      <DemoBlock 
        label="Outline"
        code={`<Badge variant="primary" outline>Primary</Badge>
<Badge variant="success" outline>Success</Badge>
<Badge variant="warning" outline>Warning</Badge>
<Badge variant="danger" outline>Danger</Badge>
<Badge variant="info" outline>Info</Badge>`}
      >
        <Badge variant="primary" outline>Primary</Badge>
        <Badge variant="success" outline>Success</Badge>
        <Badge variant="warning" outline>Warning</Badge>
        <Badge variant="danger" outline>Danger</Badge>
        <Badge variant="info" outline>Info</Badge>
      </DemoBlock>

      <DemoBlock 
        label="Use Cases"
        code={`<Badge variant="success" size="sm">✓ Merged</Badge>
<Badge variant="warning" size="sm">⏳ Pending</Badge>
<Badge variant="danger" size="sm">✕ Failed</Badge>
<Badge variant="primary" size="sm">v0.1.0</Badge>
<Badge variant="info" size="sm">New</Badge>`}
      >
        <Badge variant="success" size="sm">✓ Merged</Badge>
        <Badge variant="warning" size="sm">⏳ Pending</Badge>
        <Badge variant="danger" size="sm">✕ Failed</Badge>
        <Badge variant="primary" size="sm">v0.1.0</Badge>
        <Badge variant="info" size="sm">New</Badge>
      </DemoBlock>
    </ComponentSection>
  );
}

