import { useState } from 'react';
import { Toggle } from '@kpv2004/quark-ui';
import { ComponentSection, DemoBlock } from '../components/ComponentSection';

export function ToggleSection() {
  const [values, setValues] = useState({
    a: false,
    b: true,
    c: false,
    d: true,
    e: false,
    f: true,
  });

  const toggle = (key: keyof typeof values) =>
    setValues((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <ComponentSection
      title="Toggle"
      description="Switch component for binary on/off states. Supports labels, sizing, and disabled states with smooth animated transitions."
    >
      <DemoBlock 
        label="Default" 
        layout="stack"
        code={`const [checked, setChecked] = useState(false);
return <Toggle checked={checked} onChange={setChecked} />`}
      >
        <Toggle
          checked={values.a}
          onChange={() => toggle('a')}
        />
        <Toggle
          checked={values.b}
          onChange={() => toggle('b')}
        />
      </DemoBlock>

      <DemoBlock 
        label="With Labels" 
        layout="stack"
        code={`<Toggle checked={checked} onChange={setChecked} label="Enable notifications" />
<Toggle checked={checked} onChange={setChecked} label="Dark mode" />`}
      >
        <Toggle
          checked={values.c}
          onChange={() => toggle('c')}
          label="Enable notifications"
        />
        <Toggle
          checked={values.d}
          onChange={() => toggle('d')}
          label="Dark mode"
        />
        <Toggle
          checked={values.e}
          onChange={() => toggle('e')}
          label="Auto-save drafts"
        />
      </DemoBlock>

      <DemoBlock 
        label="Sizes"
        code={`<Toggle size="sm" label="Small" />
<Toggle size="md" label="Medium" />
<Toggle size="lg" label="Large" />`}
      >
        <Toggle
          checked={values.f}
          onChange={() => toggle('f')}
          size="sm"
          label="Small"
        />
        <Toggle
          checked={values.f}
          onChange={() => toggle('f')}
          size="md"
          label="Medium"
        />
        <Toggle
          checked={values.f}
          onChange={() => toggle('f')}
          size="lg"
          label="Large"
        />
      </DemoBlock>

      <DemoBlock 
        label="Disabled" 
        layout="stack"
        code={`<Toggle disabled label="Disabled off" />
<Toggle checked disabled label="Disabled on" />`}
      >
        <Toggle
          checked={false}
          onChange={() => {}}
          disabled
          label="Disabled off"
        />
        <Toggle
          checked={true}
          onChange={() => {}}
          disabled
          label="Disabled on"
        />
      </DemoBlock>
    </ComponentSection>
  );
}
