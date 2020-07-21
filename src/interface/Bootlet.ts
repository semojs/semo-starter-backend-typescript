/**
 * A bootlet Can do something before application boot
 */
export interface Bootlet {
  init(): void

  boot(): void
}
