
const buildClastList = (...classes: (string | false | null | undefined)[]): string => {
    return classes.filter( x => Boolean(x) ).join(' ')
}

export default buildClastList