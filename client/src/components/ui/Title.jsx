// interface Props {
//     children: React.ReactNode;}

export function Title({children}) {
  return (
    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {children}
    </h2>
  )
}
