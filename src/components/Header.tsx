import { Link} from 'react-router-dom'


export function Header(){
    return(
        <header className="w-[100vw] h-[10vh] flex flex-row items-center justify-around">
            <ul className='w-[80vw] flex flex-row items-center justify-center'>
                <li>
                    <Link to='/table'>Table</Link>
                </li>
            </ul>
        </header>
    )
}