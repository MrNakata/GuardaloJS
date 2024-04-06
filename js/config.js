export const CONFIG = {
    constants: {
        NEW_NOTE_INPUT_HEIGHT_MIN: 42,
        NEW_NOTE_INPUT_HEIGHT: 24,
        KEYS_NEW_LINE: ['Delete','Backspace'],
    },
    global: {
        num_new_line: 0,
        is_textarea_focused: false,
    },
};

export const cl = (...arg) => console.log(...arg);