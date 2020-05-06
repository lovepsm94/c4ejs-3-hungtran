//bai 10: Write a script asking users to enter a sequence of names, separated by
// commas (,), Create a new array containing the names, each surrounded with <>. If you
// need hints, find them at the end of this homework

{
    let strNames = prompt('enter a sequence of names, separated bycommas (,)');
    let arrNames = strNames.split(',');
    let arrNames2 = arrNames.map(name => '<'+ name + '>');
    alert(`${strNames} => ${arrNames2}`)
    }
    // bai 11: Write a script asking users to enter a sequence of Numbers, separated by
    // commas (,). Create a new array containing only the odd Numbers of the entered
    // sequence. If you need hints, they are at the end of this homework
    
    {
    let strNames = prompt('enter a sequence of names, separated bycommas (,)');
    let arrNames = strNames.split(',');
    let arrNames2 = arrNames.filter(name => name%2 !== 0);
    alert(`${strNames} => ${arrNames2}`);
    }