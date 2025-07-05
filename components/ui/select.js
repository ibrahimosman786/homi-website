import React from 'react';

export function Select({ value, onValueChange, children, className = '', ...props }) {
  const items = [];
  let placeholder = null;

  React.Children.forEach(children, child => {
    if (!child) return;
    if (child.type === SelectContent) {
      React.Children.forEach(child.props.children, item => {
        if (item && item.type === SelectItem) items.push(item);
      });
    } else if (child.type === SelectItem) {
      items.push(child);
    } else if (child.type === SelectTrigger) {
      React.Children.forEach(child.props.children, tChild => {
        if (tChild && tChild.type === SelectValue) {
          placeholder = tChild.props.placeholder;
        }
      });
    }
  });

  return (
    <select
      value={value}
      onChange={e => onValueChange && onValueChange(e.target.value)}
      className={`border px-3 py-2 rounded w-full ${className}`}
      {...props}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {items.map((item, idx) => (
        <option key={idx} value={item.props.value} {...item.props}>
          {item.props.children}
        </option>
      ))}
    </select>
  );
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ children }) {
  return null;
}

export function SelectTrigger({ children }) {
  return <>{children}</>;
}

export function SelectValue() {
  return null;
}