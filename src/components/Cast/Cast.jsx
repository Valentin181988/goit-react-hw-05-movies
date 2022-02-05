export const MoviesCast = ({cast}) => {
    const actors = cast.cast;

    return (
        <div>
            {actors.map(actor => (<ul>
                <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt="Actor profile"/>
                    <h3>{actor.name}</h3>
                    <p>Character: {actor.character}</p>
                </li>
            </ul>))}
        </div>
    )
}