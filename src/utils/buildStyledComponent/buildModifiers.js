import { isStyledComponent } from 'styled-components';

export default function buildModifiers(builderFn, modifiers) {
  // If using a styled component, merge the modifiers from the parent with the
  // modifiers specified for this component.This allows the use of both
  // sets of modifiers without throwing errors.
  return isStyledComponent(builderFn) && typeof builderFn.modifiers === 'object'
    ? {
        ...builderFn.modifiers,
        ...modifiers,
      }
    : modifiers;
}
