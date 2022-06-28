const components = {};

export function registerComponent(name, Component) {
  components[name] = Component;
}

export default function NavItem(props) {
  const C = components[props.type];
  return C ? <C {...props} /> : null;
}
