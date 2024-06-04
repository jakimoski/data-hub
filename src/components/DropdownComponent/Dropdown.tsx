import { useState } from "react";
import arrowIcon from "../../assets/icons/Arrow-top.png";
import { motion } from "framer-motion";

const Dropdown = ({ options }: { options: string[] }) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0] as string
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <img
          src={arrowIcon}
          alt="check"
          className={isOpen ? "dropdown__icon--open" : "dropdown__icon"}
        />
        {isOpen && (
          <motion.ul
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            initial={{ y: -10, opacity: 0 }}
            exit={{ y: -100 }}
            className="dropdown__menu"
          >
            {options.map((option) => (
              <li
                className="dropdown__menu__item"
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </button>
    </div>
  );
};

export default Dropdown;
