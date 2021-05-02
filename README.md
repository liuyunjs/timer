## install

---

```javascript
@npm: npm install @liuyunjs/timer -S

@yarn: yarn add @liuyunjs/timer
```

## Quick 

---
```javascript
import {timeout, interval} from '@liuyunjs/timer';

const timer = timeout();
const timer2 = interval();

timer.set(() => console.log('hello world'), 1000);
timer.clear();

timer2.set(() => console.log('hello world'), 1000);
timer2.clear();

```
