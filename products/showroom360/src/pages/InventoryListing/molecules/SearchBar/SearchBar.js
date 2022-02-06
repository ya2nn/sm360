import PropTypes from 'prop-types'
import { Icon, Typography } from '@sm360/phoenixjs'

const SearchBar = ({
  title,
  inputId,
  inputName,
  inputPlaceholder,
  extraClasses,
  titleExtraClasses,
  inputExtraClasses,
  searchValue,
  onChange,
  ...extraParams
}) => {
  return (
    <div
      className={`m-searchBar flex flex-col md:mx-auto md:w-3/4 md:flex-row md:items-center md:justify-center md:space-x-[40px] ${extraClasses}`}
      {...extraParams}
    >
      <Typography
        tag='p'
        variant='heading3'
        extraClasses={`m-searchBar__title mb-[10px] md:mb-0 ${titleExtraClasses}`}
      >
        {title}
      </Typography>

      {/* TODO: à remplacer text-black par la couleur globale */}
      <div className='m-searchBar__input-wrapper flex h-[45px] items-center bg-white py-3 pr-[10px] text-black md:flex-grow'>
        <input
          className={`m-searchBar__input flex w-full border-none bg-transparent focus:outline-none focus:ring-0 ${inputExtraClasses}`}
          type='text'
          id={inputId}
          name={inputName}
          value={searchValue}
          placeholder={inputPlaceholder}
          aria-describedby={inputPlaceholder}
          onChange={(e) => onChange(e.target.value)}
        />

        {searchValue && (
          <button
            className='m-searchBar__reset text-primary'
            onClick={() => onChange('')}
          >
            <Icon
              symbolId='close'
              extraClasses='m-searchBar__resetIcon w-[10px] h-[10px] mt-[-5px]'
            />
          </button>
        )}
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  /** search container extra classes  */
  extraClasses: PropTypes.string,
  /** search title  */
  title: PropTypes.string,
  /** search title extra classes */
  titleExtraClasses: PropTypes.string,
  /** search input id  */
  inputId: PropTypes.string,
  /** search input name  */
  inputName: PropTypes.string,
  /** search input placeholder  */
  inputPlaceholder: PropTypes.string,
  /** search input extra classes  */
  inputExtraClasses: PropTypes.string,
  /** search value  */
  searchValue: PropTypes.string,
  /** Handle onChange  */
  onChange: PropTypes.func,
}

SearchBar.defaultProps = {
  extraClasses: '',
  titleExtraClasses: '',
  inputExtraClasses: '',
}

export default SearchBar
