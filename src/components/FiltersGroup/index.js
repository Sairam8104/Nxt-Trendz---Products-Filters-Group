import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearch = event => {
    const {changeInput} = props
    changeInput(event.target.value)
  }

  const renderSearchBar = () => {
    const {enterSearchInput} = props
    const onEnterSearch = event => {
      if (event.key === 'Enter') {
        enterSearchInput()
      }
    }
    const {searchInput} = props
    return (
      <div>
        <input
          type="search"
          value={searchInput}
          onChange={onChangeSearch}
          placeholder="search"
          onKeyDown={onEnterSearch}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoryOption = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickChangeCategory = () => changeCategory(category.id)
      const isActive = category.id === activeCategoryId
      const activeClassName = isActive ? 'active-name' : 'inActive-name'
      return (
        <li
          key={category.id}
          className={activeClassName}
          onClick={onClickChangeCategory}
        >
          <p>{category.name}</p>
        </li>
      )
    })
  }

  const renderRatingOption = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRating = () => changeRating(rating.id)

      const activeClassName =
        activeRatingId === rating.id ? 'active-rating' : 'inActive-rating'

      return (
        <li onClick={onClickRating} key={rating.id} className={activeClassName}>
          <img src={rating.imageUrl} alt={`rating${rating.id}`} />
          <p>&up</p>
        </li>
      )
    })
  }

  return (
    <div>
      {renderSearchBar()}
      {renderCategoryOption()}
      {renderRatingOption()}
      <button type="button">Clear Filters</button>
    </div>
  )
}

export default FiltersGroup
