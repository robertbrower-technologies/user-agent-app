import { ChromeState } from './chrome/chrome-state';
import { FirefoxState } from './firefox/firefox-state';

export interface AppState {
    readonly chrome: ChromeState;
    readonly firefox: FirefoxState;
}