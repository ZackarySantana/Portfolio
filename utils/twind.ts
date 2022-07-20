import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
    darkMode: "class",
    mode: "silent",

    theme: {
        extend: {
            colors: {
                celeste: "#BAF2E9",
                cadet: "#5D737E",
                onyx: "#3F4045",
            },
            fontFamily: {
                josefin: '"Josefin Sans",sans-serif',
            },
            animation: {
                "across-screen": "across-screen 30s linear infinite",
                "across-small-screen":
                    "across-small-screen 30s linear infinite",
                twind: "twind 3s linear infinite",
            },
            keyframes: {
                "across-screen": {
                    "0%": { opacity: "0" },
                    "40%": { opacity: "1" },
                    "80%": {
                        opacity: "0",
                        transform: "translate(calc(-100vw + 7.5rem + 75px), 0)",
                        pointerEvents: "unset",
                    },
                    "81%": { pointerEvents: "none" },
                },
                "across-small-screen": {
                    "0%": {
                        opacity: "0",
                        transform: "translate(calc(2.4rem), 0)",
                    },
                    "25%": { opacity: "1" },
                    "50%": {
                        opacity: "0",
                        transform: "translate(calc(-100vw + 4.8rem + 20px), 0)",
                        pointerEvents: "unset",
                    },
                    "51%": { pointerEvents: "none" },
                },
                twind: {
                    "0%": {
                        transform:
                            "translate(154.652417px, 63.770002px) rotate(0deg)",
                        animationTimingFunction:
                            "cubic- bezier(0.420000, 0, 1, 1)",
                    },
                    "23.333333%": {
                        transform:
                            "translate(154.652417px, 63.770002px) rotate(7.962948deg)",
                    },
                    "43.333333%": {
                        transform:
                            "translate(154.652417px, 63.770002px) rotate(4.164075deg)",
                        animationTimingFunction:
                            "cubic-bezier(0, 0, 0.580000, 1)",
                    },
                    "63.333333%": {
                        transform:
                            "translate(154.652417px, 63.770002px) rotate(12.610805deg)",
                    },
                    "73.333333%": {
                        transform:
                            "translate(154.652417px, 63.770002px) rotate(13.321761deg)",
                    },
                    "100%": {
                        transform:
                            "translate(154.652417px, 63.770002px) rotate(0.218094deg)",
                    },
                },
            },
        },
    },
};

if (IS_BROWSER) setup(config);
