// --------------- DOMINANT WRITING DIRECTION --------------- //
let SCRIPT = require('./Theory/data');


function characterScript(code) {
    for (let script of SCRIPT) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }

function dominantDirection(text){  
    let directionArr=[];
    let counts={};

    let values = Array.prototype.map.call(text, function(char) { return char.charCodeAt(0); })
    let script=values.map(value => characterScript(value))
    script.map(elem=> elem!==null?  directionArr.push(elem.direction):null)
    directionArr.forEach(function(x){counts[x] = (counts[x] || 0)+1;});

    let result=Object.keys(counts).reduce(function(a, b){ return counts[a] > counts[b] ? a : b });
    return console.log(result)
}

dominantDirection("Hello!")
dominantDirection("Hey, مساء الخير")