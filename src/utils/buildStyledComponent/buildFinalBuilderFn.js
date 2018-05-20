import { isStyledComponent } from 'styled-components';

export default function builderFinalBuilderFn(builderFn) {
  // If using a styled component as the builderFn, extend the existing component
  // instead of creating an entirely new one.This is more efficient.
  return isStyledComponent(builderFn) ? builderFn.extend : builderFn;
}
