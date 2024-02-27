import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPlayers } from "../API/index"

export default function AllPlayers() {
  const navigate = useNavigate()
  const [players, setPlayers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function updatePlayers() {
      try {
        const players = await getAllPlayers()
        console.log('players', players)
        setPlayers(players)
      } catch (e) {
        console.error(e)
      }
    }
    updatePlayers()
  }, [])

  function searchHandler(e) {
    console.log('e.target.value', e.target.value)
    setSearch(e.target.value)
  }

  let filteredPlayers = players
  if (search !== '') {
    filteredPlayers = players.filter((player) => {
        const lowerCasePlayerName = player.name.toLowerCase()
        const lowerCaseSearch = search.toLowerCase()
        return lowerCasePlayerName.includes(lowerCaseSearch)
        })
  }

  return <main>
    <input name='search' value={search} onChange={searchHandler} />
    {
    filteredPlayers.map((player) => {
      return <article key={player.id}>
        <h2 onClick={() => navigate(`/players/${player.id}`)}>
          <img src={player.imageUrl} />
          <span>{player.name}</span>
        </h2>
      </article>
    })
  }</main>
}
