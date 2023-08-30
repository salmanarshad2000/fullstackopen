const Filter = ({
  searchText,
  handleCountryFilter
}) => {
  return (
    <div>
      find countries <input value={searchText} onChange={handleCountryFilter} />
    </div>
  )
}

export default Filter
