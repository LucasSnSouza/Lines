import { RecursiveFind } from "./Utils";

function StorageSet(storage, key, value){
    let Storage = StorageGet(storage);
    if(Storage){
        Storage[key] = value;
        window.localStorage.setItem(storage, JSON.stringify(Storage))
    }
    else{
        window.localStorage.setItem(storage, JSON.stringify({[key]: value}))
    }
}

function StorageFind(type, form){
    
    if(type === 'storage' && form?.value){
        return StorageGet(form.value) ? true : false;
    }
    else if(type === 'key' && form?.list && form?.value){
        console.log('teste', RecursiveFind(form.list, `#${form.value}`))
        return RecursiveFind(form.list, `#${form.value}`);
    }
    else if(type === 'value' && form?.list && form?.value){
        return RecursiveFind(form.list, form.value);
    }
    else{
        return false;
    }
}

function StorageGet(storage){
    return JSON.parse(window.localStorage.getItem(storage)) || null;
}

export {
    StorageSet,
    StorageGet,
    StorageFind
}