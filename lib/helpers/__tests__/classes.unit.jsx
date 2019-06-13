import classes from "../classes";

describe('classes', () => {
    it('接受一个className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
})

describe('classes', () => {
    it('接受两个参数', () => {
        const result = classes('a','b')
        expect(result).toEqual('a b')
    })
})

describe('classes', () => {
    it('接受空的参数', () => {
        const result = classes()
        expect(result).toEqual('')
    })
})
