export declare const Log: {
    reset: string;
    bright: string;
    dim: string;
    underscore: string;
    blink: string;
    reverse: string;
    hidden: string;
    fg: {
        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
        crimson: string;
    };
    bg: {
        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
        crimson: string;
    };
};
export declare const log: (color: string, text: string) => void;
