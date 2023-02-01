
export function charToNumber(input: string): string {


    let ret = ''
    for (let i = 0, n = input.length; i < n; i++) {
        let c = input.charAt(i)
        let ci = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.indexOf(c)
        ret += ci

    }

    return ret;
}


console.log(charToNumber('tang'))