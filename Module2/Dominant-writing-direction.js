const SCRIPTS = [
    {
      name: "Latin",
      ranges: [[65, 91], [97, 123]],
      direction: "ltr",
      year: -700,
      living: true,
      link: "https://en.wikipedia.org/wiki/Latin_alphabet"
    },
    {
      name: "Arabic",
      ranges: [[1536, 1541], [1560, 1792], [1872, 1920]],
      direction: "rtl",
      year: 400,
      living: true,
      link: "https://en.wikipedia.org/wiki/Arabic_script"
    },
    
  ];
  
  
function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => code >= from && code < to)) {
        return script;
      }
    }
    return null;
  }
  
  
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.find(c => c.name == name);
      if (!known) {
        counts.push({name, count: 1});
      } else {
        known.count++;
      }
    }
    return counts;
  }
  
 
function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (scripts.length == 0) return "No scripts found";
  
    return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
  }
  
  console.log(dominantDirection("Hello!")); 
  console.log(dominantDirection("Hey, مساء الخير")); 
  