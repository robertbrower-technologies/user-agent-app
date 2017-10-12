export interface FirefoxState {
    readonly currentValue: string;
};

export interface FirefoxFeatureState {
    firefox: FirefoxState
};

export const DefaultFirefoxState: FirefoxState = {
    currentValue: 'Firefox'
};

export const DefaultFirefoxFeatureState: FirefoxFeatureState = {
    firefox: DefaultFirefoxState
};