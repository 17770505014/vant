import{r,s as e}from"./use-translate.a3af5295.js";function p(t,{args:a=[],done:f,canceled:s}){if(t){const i=t.apply(null,a);r(i)?i.then(l=>{l?f():s&&s()}).catch(e):i?f():s&&s()}else f()}export{p as c};