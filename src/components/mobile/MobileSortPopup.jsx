import React from "react";

import PropTypes from "prop-types";

const MobileSortPopup = React.memo(function MobileSortPopup({
  items,
  activeSortType,
  onClickSortType,
}) {
  const [visibleSortPopup, setVisiblePopup] = React.useState(false);
  const activeSortLabel = items.find((obj) => obj.type === activeSortType).name;

  const sortRef = React.useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visibleSortPopup);
  };

  const onSelectItem = (index) => {
    onClickSortType(index);
    setVisiblePopup(false);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort-dropdown">
      <div className="dropbtn link" onClick={toggleVisiblePopup}>
        {activeSortLabel}
        <svg
          width="12"
          height="17"
          viewBox="0 0 12 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 17L11.1962 10.25H0.803848L6 17Z" fill="#F9F1E5" />
          <path d="M6 0L11.1962 6H0.803848L6 0Z" fill="#F9F1E5" />
        </svg>
      </div>
      {visibleSortPopup && (
        <div className="sort-dropdown-content">
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  onClick={() => onSelectItem(obj.type)}
                  className={`link
                  ${activeSortType === obj.type ? "active-sort" : ""}
                  `}
                  key={`${obj.name}_${index}`}
                >
                  {obj.name}
                  <svg
                    className="sort-icon"
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6466 0L16.715 1.363L7.74694 13.514H5.67859L0.67749 6.931L2.74584 5.1185L6.71276 8.5985L14.6466 0Z"
                      fill="black"
                    />
                  </svg>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

MobileSortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired,
};

export default MobileSortPopup;
