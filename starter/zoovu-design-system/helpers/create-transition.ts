const easing = {
    // This is the most common easing curve.
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
};

const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
};

const formatMs = (milliseconds) => `${Math.round(milliseconds)}ms`;

/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */
export default (props = ["all"], options: any = {} ) => {
    const {
        duration: durationOption = duration.standard,
        easing: easingOption = easing.easeInOut,
        delay = 0,
        ...other
    } = options;

    return (Array.isArray(props) ? props : [props])
        .map(
            (animatedProp) =>
                `${animatedProp} ${
                    typeof durationOption === "string" ? durationOption : formatMs(durationOption)
                    } ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`,
        )
        .join(",");
};

// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/transitions.test.js