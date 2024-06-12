function RecursiveFind(group, value) {
    let finded = null;
    if (Array.isArray(group)) {
        group.forEach((item) => {
            if (typeof (item) === 'string' || typeof (item) === 'number') {
                if (item === value) {
                    finded = item;
                }
            }
            else {
                const result = RecursiveFind(item, value);
                if (result !== undefined) {
                    finded = result;
                }
            }
        })
    }
    else if (typeof (group) === 'object') {
        Object.keys(group).forEach((key) => {
            if (value.charAt(0) === '#') {
                if (key === value.slice(1)) {
                    finded = { [key] : group[key] };
                }
                else {
                    const result = RecursiveFind(group[key], value);
                    if (result !== undefined) {
                        finded = result;
                    }
                }
            }
            else if (typeof (group[key]) == 'string' || typeof (group[key]) == 'number') {

                if (group[key] === value) {
                    finded = { [key] : group[key] };
                }
                else {
                    const result = RecursiveFind(group[key], value);
                    if (result !== undefined) {
                        finded = result;
                    }
                }

            }
            else {
                const result = RecursiveFind(group[key], value);
                if (result !== undefined) {
                    finded = result;
                }
            }
        })
    }
    return finded;
}

export {
    RecursiveFind
}
