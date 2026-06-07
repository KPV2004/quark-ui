import { Alert } from '@kpv2004/quark-ui';
import { ComponentSection, DemoBlock } from '../components/ComponentSection';

export function AlertSection() {
  return (
    <ComponentSection
      title="Alert"
      description="Contextual feedback messages for user actions and system status. Available in informational, success, warning, and danger variants."
    >
      <DemoBlock 
        label="Variants" 
        layout="stack"
        code={`<Alert variant="info">This is an informational alert — check it out!</Alert>
<Alert variant="success">Operation completed successfully.</Alert>
<Alert variant="warning">Warning — this action may have side effects.</Alert>
<Alert variant="danger">Error — something went wrong. Please try again.</Alert>`}
      >
        <Alert variant="info">
          This is an informational alert — check it out!
        </Alert>
        <Alert variant="success">
          Operation completed successfully.
        </Alert>
        <Alert variant="warning">
          Warning — this action may have side effects.
        </Alert>
        <Alert variant="danger">
          Error — something went wrong. Please try again.
        </Alert>
      </DemoBlock>

      <DemoBlock 
        label="With Title" 
        layout="stack"
        code={`<Alert variant="info" title="Did you know?">Quark UI components are fully type-safe and tree-shakeable.</Alert>
<Alert variant="success" title="Deployment Successful">Your application has been deployed to production.</Alert>`}
      >
        <Alert variant="info" title="Did you know?">
          Quark UI components are fully type-safe and tree-shakeable.
        </Alert>
        <Alert variant="success" title="Deployment Successful">
          Your application has been deployed to production.
        </Alert>
        <Alert variant="warning" title="Rate Limit Warning">
          You have used 90% of your API quota for this month.
        </Alert>
        <Alert variant="danger" title="Connection Lost">
          Unable to reach the server. Check your network connection.
        </Alert>
      </DemoBlock>

      <DemoBlock 
        label="Dismissible" 
        layout="stack"
        code={`<Alert variant="info" title="Tip" onClose={() => alert('Closed!')}>You can close this alert by clicking the × button.</Alert>`}
      >
        <Alert
          variant="info"
          title="Tip"
          onClose={() => {}}
        >
          You can close this alert by clicking the × button.
        </Alert>
        <Alert
          variant="success"
          onClose={() => {}}
        >
          Changes saved! This message can be dismissed.
        </Alert>
      </DemoBlock>

      <DemoBlock 
        label="Title Only" 
        layout="stack"
        code={`<Alert variant="info" title="New version available" />
<Alert variant="success" title="All checks passed" />`}
      >
        <Alert variant="info" title="New version available" />
        <Alert variant="success" title="All checks passed" />
        <Alert variant="warning" title="Maintenance scheduled for tonight" />
      </DemoBlock>
    </ComponentSection>
  );
}

