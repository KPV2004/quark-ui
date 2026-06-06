import { Avatar } from '@quark-ui/react';
import { ComponentSection, DemoBlock } from '../components/ComponentSection';
import styles from './AvatarSection.module.css';

export function AvatarSection() {
  return (
    <ComponentSection
      title="Avatar"
      description="User representation component with image, initials fallback, status indicators, and multiple sizing options. Supports circle and square shapes."
    >
      <DemoBlock 
        label="Sizes"
        code={`<Avatar size="xs" fallback="XS" />
<Avatar size="sm" fallback="SM" />
<Avatar size="md" fallback="MD" />
<Avatar size="lg" fallback="LG" />
<Avatar size="xl" fallback="XL" />`}
      >
        <Avatar size="xs" fallback="XS" />
        <Avatar size="sm" fallback="SM" />
        <Avatar size="md" fallback="MD" />
        <Avatar size="lg" fallback="LG" />
        <Avatar size="xl" fallback="XL" />
      </DemoBlock>

      <DemoBlock 
        label="With Fallback Initials"
        code={`<Avatar fallback="JD" size="lg" />
<Avatar fallback="AK" size="lg" />`}
      >
        <Avatar fallback="JD" size="lg" />
        <Avatar fallback="AK" size="lg" />
        <Avatar fallback="MR" size="lg" />
        <Avatar fallback="TS" size="lg" />
      </DemoBlock>

      <DemoBlock 
        label="With Images"
        code={`<Avatar src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" alt="Felix" size="lg" />
<Avatar src="https://api.dicebear.com/9.x/avataaars/svg?seed=Aneka" alt="Aneka" size="lg" />`}
      >
        <Avatar
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix"
          alt="Felix"
          size="lg"
        />
        <Avatar
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Aneka"
          alt="Aneka"
          size="lg"
        />
        <Avatar
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Max"
          alt="Max"
          size="lg"
        />
      </DemoBlock>

      <DemoBlock 
        label="Status Indicators"
        code={`<Avatar fallback="ON" size="lg" status="online" />
<Avatar fallback="OF" size="lg" status="offline" />
<Avatar fallback="AW" size="lg" status="away" />
<Avatar fallback="BS" size="lg" status="busy" />`}
      >
        <Avatar fallback="ON" size="lg" status="online" />
        <Avatar fallback="OF" size="lg" status="offline" />
        <Avatar fallback="AW" size="lg" status="away" />
        <Avatar fallback="BS" size="lg" status="busy" />
      </DemoBlock>

      <DemoBlock 
        label="Square Shape"
        code={`<Avatar fallback="SQ" size="md" shape="square" />
<Avatar fallback="AB" size="lg" shape="square" />`}
      >
        <Avatar fallback="SQ" size="md" shape="square" />
        <Avatar fallback="AB" size="lg" shape="square" />
        <Avatar fallback="CD" size="xl" shape="square" />
      </DemoBlock>

      <DemoBlock 
        label="Avatar Group"
        code={`<div className={styles.avatarGroup}>
  <Avatar fallback="AL" size="md" />
  <Avatar fallback="BK" size="md" />
  <Avatar fallback="CM" size="md" />
</div>`}
      >
        <div className={styles.avatarGroup}>
          {['AL', 'BK', 'CM', 'DN', 'EF'].map((initials) => (
            <div key={initials} className={styles.avatarGroupItem}>
              <Avatar fallback={initials} size="md" />
            </div>
          ))}
        </div>
      </DemoBlock>
    </ComponentSection>
  );
}

