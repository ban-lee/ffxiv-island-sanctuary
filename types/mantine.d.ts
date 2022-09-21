import { DefaultMantineColor, MantineTheme, Tuple } from '@mantine/core';
import '@emotion/react';

/**
 * Custom Mantine Colors
 */
 type ExtendedCustomColors = DefaultMantineColor;

 declare module '@mantine/core' {
   export interface MantineThemeColorsOverride {
     colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
   }
 }

 /**
  * Extend Emotion theme to include Mantine Theme variables
  */
 declare module '@emotion/react' {
   export interface Theme extends MantineTheme {}
 }
