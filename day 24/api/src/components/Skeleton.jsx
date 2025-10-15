import React from "react";
import "./Skeleton.css";

export default function Skeleton() {
  return (
    <div className="skeleton-page">
      <div className="skeleton-header">
        <div className="skeleton-flag" />
        <div className="skeleton-title-block">
          <div className="skeleton-title" />
          <div className="skeleton-sub" />
          <div className="skeleton-actions">
            <div className="skeleton-chip" />
            <div className="skeleton-chip small" />
            <div className="skeleton-chip small" />
          </div>
        </div>
      </div>

      <div className="skeleton-metrics">
        <div className="skeleton-metric" />
        <div className="skeleton-metric" />
        <div className="skeleton-metric" />
        <div className="skeleton-metric" />
      </div>

      <div className="skeleton-details">
        <div className="skeleton-panel">
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
          <div className="skeleton-line" />
        </div>
        <div className="skeleton-panel">
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>
      </div>
    </div>
  );
}
