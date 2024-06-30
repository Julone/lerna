
export const  parentLogger = (title, msg)=> {
    console.log(
      ` %c ${title}  %c ${msg} `,
      'color: #fff; background: #4B60CF; padding:5px 0;',
      'background: #030307; color: #fff; padding:5px 0;word-break:break-all'
    )
}
export const childLogger = (title, msg)=> {
    console.log(
      ` %c ${title}  %c ${msg}`,
      'color: #fa8c16; background: #fff7e6; padding:5px 0;',
      'background: #030307; color: #fff; padding:5px 0;word-break:break-all'
    )
}