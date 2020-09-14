interface JumpArrowOptions {
  goTo: string;
}

export interface NavigationTheme {
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  opacity?: number;
  scrolling?: boolean;
  jumpArrowOptions?: JumpArrowOptions;
}
