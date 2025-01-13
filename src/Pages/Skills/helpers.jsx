export function normalizeSkilltypename(name) {
    let getName = name.split("_")[1];
    getName = `${getName[0].toUpperCase()}${getName.slice(1)}`;
    return getName;
  }