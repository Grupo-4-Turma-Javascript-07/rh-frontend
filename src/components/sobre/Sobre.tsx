
function Sobre() {
    return (
    <div id='sobre' className='min-h-screen bg-background'>
    <header className='bg-nav-footer text-white flex justify-between items-center px-8 py-4'>
    <div>
        <h1 className='text-xl font-family-titulo'>RH Generation</h1>
        <p className='text-sm'>GRUPO 04</p>
    </div>
    <nav className='space-x-4'>
        <a href='#home' className='hover:underline'>Home</a>
        <a href='#sobre' className='underline font-family-texto'>Sobre Nós</a>
        <a href='#contato' className='hover:underline'>Contato</a>
    </nav>
    </header>
        <main className="py-10 px-4"></main>
        <h2 className='text-3xl text-center font-family-texto text-nav-footer mb-8'>Sobre Nós</h2>
    </div>
    )
}
export default Sobre
