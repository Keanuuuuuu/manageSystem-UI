// 将输入的字符串转换为特定的数值数组 空调对应的模式

export function switchString(...items) {
    console.log(items);
    let res = []
    if(items[0] === '开'){
        res[0] = 1
    }else {
        res[0] = 0
    }

    if(items[1] === '制冷'){
        res[1] = 2
    }else if(items[1] === '制热'){
        res[1] = 1
    }else if(items[1] === '送风'){
        res[1] = 4
    }else if(items[1] === '除湿'){
        res[1] = 8
    }

    if(items[2] === '自动'){
        res[2] = 0
    }else if(items[2] === '低速'){
        res[2] = 1
    }else if(items[2] === '中速'){
        res[2] = 2
    }else if(items[2] === '高速'){
        res[2] = 3
    }

    res[3] = items[3]

    res[3] = parseInt(items[3])

    return res
}