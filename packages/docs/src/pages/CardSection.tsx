import { Card, Button } from '@kpv2004/quark-ui';
import { ComponentSection, DemoBlock } from '../components/ComponentSection';

export function CardSection() {
  return (
    <ComponentSection
      title="Card"
      description="Container component with multiple visual variants, padding options, and hover effects. Perfect for grouping related content."
    >
      <DemoBlock 
        label="Variants" 
        layout="grid"
        code={`<Card variant="default" padding="md">
  <h4>Default</h4>
  <p>Standard card with subtle background.</p>
</Card>
<Card variant="outlined" padding="md">
  <h4>Outlined</h4>
  <p>Card with a visible border outline.</p>
</Card>
<Card variant="elevated" padding="md">
  <h4>Elevated</h4>
  <p>Card with shadow depth effect.</p>
</Card>
<Card variant="glass" padding="md">
  <h4>Glass</h4>
  <p>Frosted glass morphism style.</p>
</Card>`}
      >
        <Card variant="default" padding="md">
          <h4 style={{ color: 'var(--qk-text-1)', marginBottom: 8, fontSize: 15, fontWeight: 600 }}>Default</h4>
          <p style={{ color: 'var(--qk-text-3)', fontSize: 13 }}>Standard card with subtle background.</p>
        </Card>
        <Card variant="outlined" padding="md">
          <h4 style={{ color: 'var(--qk-text-1)', marginBottom: 8, fontSize: 15, fontWeight: 600 }}>Outlined</h4>
          <p style={{ color: 'var(--qk-text-3)', fontSize: 13 }}>Card with a visible border outline.</p>
        </Card>
        <Card variant="elevated" padding="md">
          <h4 style={{ color: 'var(--qk-text-1)', marginBottom: 8, fontSize: 15, fontWeight: 600 }}>Elevated</h4>
          <p style={{ color: 'var(--qk-text-3)', fontSize: 13 }}>Card with shadow depth effect.</p>
        </Card>
        <Card variant="glass" padding="md">
          <h4 style={{ color: 'var(--qk-text-1)', marginBottom: 8, fontSize: 15, fontWeight: 600 }}>Glass</h4>
          <p style={{ color: 'var(--qk-text-3)', fontSize: 13 }}>Frosted glass morphism style.</p>
        </Card>
      </DemoBlock>

      <DemoBlock 
        label="Hoverable" 
        layout="grid"
        code={`<Card variant="outlined" padding="md" hoverable>
  <h4>Hover Me</h4>
  <p>This card lifts on hover.</p>
</Card>
<Card variant="glass" padding="md" hoverable>
  <h4>Interactive</h4>
  <p>Glass card with hover effect.</p>
</Card>`}
      >
        <Card variant="outlined" padding="md" hoverable>
          <h4 style={{ color: 'var(--qk-text-1)', marginBottom: 8, fontSize: 15, fontWeight: 600 }}>Hover Me</h4>
          <p style={{ color: 'var(--qk-text-3)', fontSize: 13 }}>This card lifts on hover.</p>
        </Card>
        <Card variant="glass" padding="md" hoverable>
          <h4 style={{ color: 'var(--qk-text-1)', marginBottom: 8, fontSize: 15, fontWeight: 600 }}>Interactive</h4>
          <p style={{ color: 'var(--qk-text-3)', fontSize: 13 }}>Glass card with hover effect.</p>
        </Card>
      </DemoBlock>

      <DemoBlock 
        label="Padding Sizes" 
        layout="grid"
        code={`<Card variant="outlined" padding="sm">padding="sm"</Card>
<Card variant="outlined" padding="md">padding="md"</Card>
<Card variant="outlined" padding="lg">padding="lg"</Card>`}
      >
        <Card variant="outlined" padding="sm">
          <span style={{ color: 'var(--qk-text-muted)', fontSize: 13 }}>padding="sm"</span>
        </Card>
        <Card variant="outlined" padding="md">
          <span style={{ color: 'var(--qk-text-muted)', fontSize: 13 }}>padding="md"</span>
        </Card>
        <Card variant="outlined" padding="lg">
          <span style={{ color: 'var(--qk-text-muted)', fontSize: 13 }}>padding="lg"</span>
        </Card>
      </DemoBlock>

      <DemoBlock 
        label="Card with Rich Content" 
        layout="stack"
        code={`<Card variant="glass" padding="lg" hoverable>
  <h3>Getting Started</h3>
  <p>Build beautiful interfaces with Quark UI's pre-built components.</p>
  <Button variant="primary" size="sm">Learn More</Button>
</Card>`}
      >
        <Card variant="glass" padding="lg" hoverable>
          <h3 style={{ color: 'var(--qk-text-1)', marginBottom: 8, fontSize: 18, fontWeight: 700 }}>Getting Started</h3>
          <p style={{ color: 'var(--qk-text-3)', fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
            Build beautiful interfaces with Quark UI's pre-built components.
            Everything is type-safe and accessible out of the box.
          </p>
          <Button variant="primary" size="sm">Learn More</Button>
        </Card>
      </DemoBlock>
    </ComponentSection>
  );
}
