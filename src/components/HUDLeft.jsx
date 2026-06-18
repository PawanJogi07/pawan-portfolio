export default function HUDLeft() {
  return (
    <div className="hud-panel">
      <h3>AI STATUS</h3>

      <div className="status-item">
        <span>DATA SCIENCE</span>
        <span className="online">ONLINE</span>
      </div>

      <div className="status-item">
        <span>MACHINE LEARNING</span>
        <span className="online">ACTIVE</span>
      </div>

      <div className="status-item">
        <span>DEEP LEARNING</span>
        <span className="online">READY</span>
      </div>

      <div className="status-item">
        <span>COMPUTER VISION</span>
        <span className="online">ACTIVE</span>
      </div>
    </div>
  );
}