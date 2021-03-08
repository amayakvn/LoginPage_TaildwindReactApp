
function Contenido({ children }){
    return (
        <div classname="min-h-screen flex items-center justify-left bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div classname="max-w-md w-full space-y-8">
            {children}
            </div>
        </div>
    );
}
export default Contenido;