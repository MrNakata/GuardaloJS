// https://stackoverflow.com/a/4009768
export const countNewLines = element => ((element.value).match(/\n/g) || []).length;