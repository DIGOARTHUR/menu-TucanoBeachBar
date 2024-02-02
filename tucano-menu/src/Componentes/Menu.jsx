import Menu from '../data/Data.js'

const Test = () => {

    return (
        <div>
            <h1>teste</h1>
            <ul>
                {Menu.map((item) => (
                    <li key={item.name} ></li>
                )) }
            </ul>
        </div>

    )
}