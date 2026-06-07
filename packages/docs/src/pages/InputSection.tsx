import { Input } from '@kpv2004/quark-ui';
import { ComponentSection, DemoBlock } from '../components/ComponentSection';
import { FiSearch } from 'react-icons/fi';

export function InputSection() {
  return (
    <ComponentSection
      title="Input"
      description="Flexible text input component with label, validation, helper text, icons, and variant support. Designed for forms and data entry."
    >
      <DemoBlock 
        label="Default" 
        layout="stack"
        code={`<Input label="Email" placeholder="you@example.com" />
<Input label="Password" placeholder="Enter your password" />`}
      >
        <Input label="Email" placeholder="you@example.com" />
        <Input label="Password" placeholder="Enter your password" />
      </DemoBlock>

      <DemoBlock 
        label="With Error" 
        layout="stack"
        code={`<Input label="Email" placeholder="you@example.com" error="Please enter a valid email address" />`}
      >
        <Input
          label="Email"
          placeholder="you@example.com"
          error="Please enter a valid email address"
        />
      </DemoBlock>

      <DemoBlock 
        label="With Helper Text" 
        layout="stack"
        code={`<Input label="Username" placeholder="johndoe" helperText="Must be 3-20 characters, letters and numbers only" />`}
      >
        <Input
          label="Username"
          placeholder="johndoe"
          helperText="Must be 3-20 characters, letters and numbers only"
        />
      </DemoBlock>

      <DemoBlock 
        label="Filled Variant" 
        layout="stack"
        code={`<Input label="Search" placeholder="Search components..." variant="filled" />
<Input label="Workspace" placeholder="my-workspace" variant="filled" helperText="Choose a unique workspace name" />`}
      >
        <Input
          label="Search"
          placeholder="Search components..."
          variant="filled"
        />
        <Input
          label="Workspace"
          placeholder="my-workspace"
          variant="filled"
          helperText="Choose a unique workspace name"
        />
      </DemoBlock>

      <DemoBlock 
        label="With Icons" 
        layout="stack"
        code={`<Input label="Search" placeholder="Search..." leftIcon={<FiSearch />} />
<Input label="Amount" placeholder="0.00" leftIcon={<span>$</span>} rightIcon={<span>USD</span>} />`}
      >
        <Input
          label="Search"
          placeholder="Search..."
          leftIcon={<FiSearch />}
        />
        <Input
          label="Amount"
          placeholder="0.00"
          leftIcon={<span>$</span>}
          rightIcon={<span>USD</span>}
        />
      </DemoBlock>

      <DemoBlock 
        label="Disabled" 
        layout="stack"
        code={`<Input label="Disabled Input" placeholder="Cannot edit" disabled />
<Input label="Disabled with Value" placeholder="Cannot edit" disabled value="Read-only value" />`}
      >
        <Input
          label="Disabled Input"
          placeholder="Cannot edit"
          disabled
        />
        <Input
          label="Disabled with Value"
          placeholder="Cannot edit"
          disabled
          value="Read-only value"
        />
      </DemoBlock>
    </ComponentSection>
  );
}
