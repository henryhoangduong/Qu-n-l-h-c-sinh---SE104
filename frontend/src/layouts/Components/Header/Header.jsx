import Input from '../Input'

function Header() {
    return (
        <div className="flex flex-row justify-between items-center h-2 mb-2 " style={{ height: '10%' }}>
            <h1 className=' mb-2 text-3xl font-semibold tracking-tight text-gray-900'>Student management system</h1>
            <Input />
        </div>
    )
}

export default Header;