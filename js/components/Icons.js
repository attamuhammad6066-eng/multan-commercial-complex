const { useState, useEffect, useMemo, useRef } = React;

// Lucide Icon Helper
const Icon = ({ name, size = 20, className = "" }) => {
  const iconRef = useRef(null);
  
  useEffect(() => {
    if (window.lucide && iconRef.current) {
      window.lucide.createIcons();
    }
  }, [name]);

  const kebabName = name
    ? name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    : 'circle';

  return <i data-lucide={kebabName} style={{ width: size, height: size }} className={`inline-block align-middle ${className}`} ref={iconRef}></i>;
};

window.Icon = Icon;