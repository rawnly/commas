# Commas
> Add, Remove, Replace commas.

## Installation
To install **commas** you need 
to use a **node package manager** as **npm** 
or **yarn**

```bash
    $ npm install commas --save
    # YARN 
    $ yarn add commas
```

## Usage

See more in the `example` folder
```js
const cm = require('commas');

let n = {
  wComma: "1,000,000",
  nComma: 1000000
}

n = cm.add(number.nComma);
//=> 1000000 to "1000000"
// return string

n = cm.remove(number.wComma);
//=> "1,000,000" to 1000000
// return number

n = cm.replace(number.wComma);
//=> "1,000,000" to 1.000.000
// return number
```

