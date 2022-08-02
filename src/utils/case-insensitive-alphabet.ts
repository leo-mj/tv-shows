import IShow from './i-show';

export default function caseInsensitiveAlphabet(a: IShow, b: IShow): number {
    const aName: string = a.name.toLowerCase();
    const bName: string = b.name.toLowerCase();
    if (aName < bName) {
        return -1;
    } else if (aName > bName) {
        return 1;
    }
    return 0;
}