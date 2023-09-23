export function groupBy<K, V>(array: V[], grouper: (item: V) => K ) {
    return array.reduce((store, item) => {
        let key = grouper(item);
        if(!store.has(key)){
            store.set(key, [item])
        }
        else{
            store.get(key)?.push(item)
        }

        return store
    }, new Map<K, V[]>)
}

export function mapToArray<K, V, R>(m: Map<K, V>, transformer: (key: K, item: V) => R){
    return Array.from(m.entries()).map(pair => transformer(pair[0], pair[1]))
}