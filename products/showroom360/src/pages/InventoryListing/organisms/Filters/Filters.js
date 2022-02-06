/* TODO: Revoir les configuration de couleur */
import { Accordion, AccordionItem, Icon, lang } from '@sm360/phoenixjs'
import PropTypes from 'prop-types'
import FilterItem from './FilterItemType/FilterItem'
import { filterItemType } from './FilterItemType/FilterItemType'
import { useContext } from 'react'
import InventoryListingContext from '../../InventoryListingContext'

const Filters = ({ position, filterItems, parameters }) => {
  const { changeState, updateParameters } = useContext(InventoryListingContext)

  const onClickTypeButton = (slug, key) => {
    const params = { slug, key }

    updateParameters(params)
    changeState()
  }

  return (
    <Accordion position={position}>
      {filterItems.map(([filterName, filterItems]) => (
        <AccordionItem
          extraClasses={`m-accordeon--${filterName}`}
          key={filterName}
          trigger={
            <div className='flex items-center justify-center'>
              <Icon
                symbolId={`f-${filterName}`}
                extraClasses='w-[20px] h-[20px] mr-[10px]'
              />
              {filterItemType[filterName]?.label[lang]}
            </div>
          }
          buttonExtraClasses={`bg-[#f2f2f2] ${
            parameters[filterName] ||
            parameters[filterItemType[filterName]?.filterMinSlug] ||
            parameters[filterItemType[filterName]?.filterMaxSlug]
              ? 'text-primary'
              : ''
          }`}
          contentContainerExtraClasses={`bg-[#ffffff] ${
            position === 'horizontal' ? 'shadow-accordionItemContainer' : ''
          }`}
          contentExtraClasses={`flex flex-col md:mx-auto ${
            position === 'horizontal' ? 'md:w-fit' : ''
          }`}
        >
          <FilterItem
            filterName={filterName}
            filterItems={filterItems}
            position={position}
            parameters={parameters}
            filterItemType={filterItemType[filterName]?.type}
            filterItemVariant={filterItemType[filterName]?.variant}
            onClickTypeButton={onClickTypeButton}
          />
        </AccordionItem>
      ))}
    </Accordion>
  )
}

Filters.propTypes = {
  /** Filter position */
  position: PropTypes.oneOf(['vertical', 'horizontal']),
  /** List of filters items */
  filterItems: PropTypes.array.isRequired,
  /** List of parameters context */
  parameters: PropTypes.object,
}

export default Filters
