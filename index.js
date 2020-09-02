'use strict'

const bracketsMatch = (brackets) => {
//pokud je string prázdný nebo je v poli lichý počet závorek:
  if (brackets.length === 0 || brackets.length % 2 != 0)
    return false

//uložiště otvíracích závorek:
  let stack = []

  for (let i = 0; i < brackets.length; i++)  {
  //prochází string, alternativou je pushnout string do pole a rozdělit ho pomocí split('')
    let bracket = brackets.charAt(i)
    
  //pokud je závorka otvírací, pushne se do uložiště; pokud je závorka zavírací a pokud není uložiště prázdné, jedna otvírací závorka se z uložiště odebere  
    if (bracket === '(') {
      stack.push(bracket)
    } else if (bracket === ')') {
        if (stack.length > 0) {
          stack.pop('(')
        } else {
        return false
      }
    }
  }
//aby každá otvírací závorka měla svou zavírací, musí být uložiště prázdné:
  return stack.length === 0
};

//Test:
console.log(bracketsMatch('(())')) //true
console.log(bracketsMatch('()')) //true
console.log(bracketsMatch(`(()())
((()(())))
()()(())()`)) //true (ze zadání)
console.log(bracketsMatch('')) //false
console.log(bracketsMatch('(')) //false
console.log(bracketsMatch(')')) //false
console.log(bracketsMatch(')(')) //false
console.log(bracketsMatch('(()')) //false
console.log(bracketsMatch('())')) //false
console.log(bracketsMatch(`((
  )())
  ())((())`)) //false (ze zadání)


