module.exports = function solveEquation(equation) {

    equation = equation.replace(/\s/g, '')
    
    var ratios = equation.match(/(([+-]|^)\d+)|([+-] \d+)/g)

    if (ratios != null) {
        ratios = ratios.map(Number);
    }

    var a = b = 1; 
    var c = 0;
    
    aReg = /((^[+-]|^)\d+)/;
    bReg = /x*2+[+-]+\d+./
    cReg = /[+-]\d+$/

    if (equation.search(aReg)!=-1){
        a = ratios.shift()
    }
    if (equation.search(bReg)!=-1){
        b = ratios.shift()
    }
    if (equation.search(cReg)!=-1){
        c = ratios.shift()
    }

    var D = b ** 2 - 4 * a * c
    var sqrtD = Math.sqrt(D)

    if (D > 0){
        x1 = Math.round((-b + sqrtD)/(2 * a))
        x2 = Math.round((-b - sqrtD)/(2 * a))
        return (x1 < x2) ? [x1, x2] : [x2, x1]
    } else if (D == 0) {
        return [((-b) + sqrtD)/(2 * a), null]
    } else 
        return [null, null];
}

