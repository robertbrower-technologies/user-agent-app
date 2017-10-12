export interface ChromeState {
    readonly currentValue: string;
};

export interface ChromeFeatureState {
    chrome: ChromeState
};

export const DefaultChromeState: ChromeState = {
    currentValue: 'Chrome'
};

export const DefaultChromeFeatureState: ChromeFeatureState = {
    chrome: DefaultChromeState
};