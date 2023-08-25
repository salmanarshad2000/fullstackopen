const Filter = ({
  searchText,
  handleSearchTextChange
}) => {
  return (
    <div>
      find countries <input value={searchText} onChange={handleSearchTextChange} />
    </div>
  )
}

export default Filter
