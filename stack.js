var isValid = function (s) {
    const stack = [];
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let char of s) {
        if (pairs[char]){
            stack.push(char)
        } else {
            const lastPop = stack.pop()

            if (pairs[lastPop] !== char){
                return false
            }
        }
    }
    return stack.length === 0
};

const inputString = "{()}["
console.log(isValid(inputString));

/*
  pc start to loop through each element in  inputString:
    S1: inputString[0] = '{' 
        => pairs.'{' = '}'
        => stack = ['{']
    S2: inputString[1] = '('
        => pairs.'(' = ')'
        => stack = ['{','(']
    S3: inputString[2] = ')'
        => pairs.')' = undefinded 
        => stack.pop() = '('
        => stack = ['{']
        => pairs[stack.pop()] = pairs.'(' = ')' === inputString[2]
    S4: inputString[3] = '}'
        => pairs.'}' = undefinded 
        => stack.pop() = '{'
        => stack = []
        => pairs[stack.pop()] = pairs.'{' = '}' === inputString[3]
    S5: inputString[4] = '['
        => pairs.'[' = ']'
        => stack = ['[']
        => stack.length !== 0 
    
    Final : False
 */
