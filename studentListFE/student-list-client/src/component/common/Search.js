import React from 'react'

const Search = ({search, setSearch}) => {
  return (

  <div class="col-md-4 float-end mb-3">
    <form class="d-flex" onSubmit={(e) => e.preventDefault()}>
      <input class="form-control me-2" type="search" role='searchbox' placeholder="Search Student" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
       </form>
  </div>

  )
}

export default Search
