function identity<T>(value: T): T {
   return value;
}


const a=identity("yash").toUpperCase(
)

function lastelement<T>(value:T[]):T{
    return value[value.length -1]
}

console.log(lastelement([1,2,3,4,5]))

function echo <T>(value:T):T{
    return value
}

console.log(echo(10))
console.log(echo("yash"))

function abc<T>(value:T):T[]{
    return [value]
}

function makePair<T,U>(first:T,second:U):[T,U]{
    return [first,second]
}

function getId <T extends {id:number}>(value:T):number{
    return value.id
}

console.log(getId({id:4,name:"yash"}))

function getName<T extends {name:string}>(value:T[]):string[]{
    return value.map(i=>i.name)
}


console.log(getName([{name:"a",id:1},{id:3,name:"b"}]))

function pluck<T,K extends keyof T>(value:T[],key:K):T[K][]{
    return value.map(i=>i[key])
}
