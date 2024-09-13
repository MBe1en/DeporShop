import { forwardRef } from "react";

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//   // otras propiedades personalizadas que puedas necesitar agregar
// }

export const Input = forwardRef((props, ref) => (
  <input
    {...props} 
    ref={ref}
    className="appearance-none rounded-md relative block
                  w-full px-3 py-2 border border-gray-300 text-sm 
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10"
  />
  
));

// interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

// export function Input(props: Props) {
//   return (
//     <input
//       className="appearance-none rounded-md relative block
//                   w-full px-3 py-2 border border-gray-300
//                   placeholder-gray-500 text-gray-900 rounded-t-md
//                   focus:outline-none focus:ring-indigo-500
//                   focus:border-indigo-500 focus:z-10 sm:text-sm"
//     {...props}
//     />
//   );
// }

