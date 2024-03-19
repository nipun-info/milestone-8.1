
const Link = ({route}) => {
    const {name, path} = route;
  return (
    <div>
       <li className="hover:bg-purple-300 p-2">
        <a href={path}>{name}</a>
       </li>
    </div>
  )
}

export default Link
