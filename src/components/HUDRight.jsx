export default function HUDRight() {
  return (
    <div className="hud-panel">
      <h3>SYSTEM INFO</h3>

      <div className="status-item">
        <span>PROJECTS</span>
        <span>08+</span>
      </div>

      <div className="status-item">
        <span>GITHUB</span>
        <span>ACTIVE</span>
      </div>

      <div className="status-item">
        <span>DEPLOYMENTS</span>
        <span>LIVE</span>
      </div>

      <div className="status-item">
        <span>STATUS</span>
        <span className="online">READY</span>
      </div>
    </div>
  );
}