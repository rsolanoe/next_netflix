
const buildClastList = (...classes: (string | false | null | undefined)[]): string => {
    return classes.filter(Boolean).join(' ')
}

export default buildClastList