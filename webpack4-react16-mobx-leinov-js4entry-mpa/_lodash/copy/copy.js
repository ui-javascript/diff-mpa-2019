import {cloneDeep} from 'lodash'

const array = [12, 23, {a: 1, b: 23, c: 234}]
console.log(array)

const copyArray = cloneDeep(array)
console.log(copyArray)




