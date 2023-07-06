function returnKeys<T extends Object>(arg: T) {
    console.log(Object.keys(arg))
    return arg;
}

const a = returnKeys({
    abc: 'def'
})

interface GenericPerson<T> {
    name: string,
    age: number,
    special: T
}

const John: GenericPerson<string> = {
    special: 'This is my special proeprty',
    name: 'John',
    age: 20
}

class Observable<T extends GenericPerson<string>>  {
    subscribe(arg: T) {
        console.log(`Subscribed to ${arg.name}`)
    }
}

new Observable<typeof John>().subscribe(John);