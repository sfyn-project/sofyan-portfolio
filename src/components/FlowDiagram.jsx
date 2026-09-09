const nodes = [
  'Sales', 'Sales Order', 'Inventory', 'Approval', 'CS', 'Order / Visit', 'Payment', 'Provisioning', 'Orin Ready'
]

export default function FlowDiagram() {
  return (
    <div className="flow" aria-label="Customer onboarding workflow">
      {nodes.map((node, index) => (
        <div className="flow-step" key={node} style={{ '--step': index }}>
          <div className="flow-node">{node}</div>
          {index < nodes.length - 1 && <div className="flow-arrow" aria-hidden="true"><span /></div>}
        </div>
      ))}
    </div>
  )
}
