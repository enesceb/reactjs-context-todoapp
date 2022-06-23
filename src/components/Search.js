import React from 'react'

const Search = ({value, searchHandle}) => {
  return (
    <div className='flex mt-4 bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
    <input className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-darker'
    type="text"
    placeholder="Todolarda ara"
    value={value}
    onChange={searchHandle}
  ></input>
  </div>
  )
}

export default Search