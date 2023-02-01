const dic = `1234567890!@#$%^&*()[]{},.<>/?;':"abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ `
export function charToNumber(input: string): string {
    if (!input) return ''
    return [...input].reduce(function (pre, curr) {
        let ci = dic.indexOf(curr) + 1
        return pre + ci
    }, '')

}