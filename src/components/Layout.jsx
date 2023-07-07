const Layout = ({children}) => {
  return (
    <div className="flex flex-col mt-20 items-center bg-gradient-to-r from-slate-50 to-slate-300"> {/* bg-gradient-to-r from-cyan-500 to-blue-500 ... */}
        {children}
    </div>
  )
}

export default Layout