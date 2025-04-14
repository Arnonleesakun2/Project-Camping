

const StatCard = ({label,value,Icon}) => {
  return (
    <div className="stats shadow-lg bg-base-100">
      <div className="stat">
        <div className="stat-figure text-primary">
          <Icon size={32} />
        </div>
        <div className="stat-title">Total {label}</div>
        <div className="stat-value text-primary">{value}</div>
        <div className="stat-desc">Active accounts in the system</div>
      </div>
    </div>
  );
};

export default StatCard;
