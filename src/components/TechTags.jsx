export default function TechTags({ items }) {
  return (
    <div className="tech-tags">
      {items.map((item) => (
        <span className="tech-tag mono" key={item}>{item}</span>
      ))}
    </div>
  )
}
