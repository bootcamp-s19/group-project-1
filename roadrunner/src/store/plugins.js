const localStoragePlugin = store => {
    store.subscribe ((mutation, { cars }) =>{
        // stuff here
    })
}

export default process.env.NODE_ENV !== 'production'
? [localStoragePlugin] : [localStoragePlugin]