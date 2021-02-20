import Commerce from '@chec/commerce.js';

// bad practice
// export const commerce =  new Commerce('pk_23553a879d033c86e954589085ffc6c5ca9499ef91d4c');

// good one
export const commerce = new Commerce(process.env.REACT_APP_CHECK_PUBLIC_KEY, true);