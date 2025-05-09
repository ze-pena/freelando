import { useState } from 'react';

import styles from './styles.module.scss';

type OptionItem = {
  text: string;
  value: string;
};

type Props = {
  label: string;
  name: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
  optionList: OptionItem[];
};

export default function SelectInput(props: Props) {
  const [option, setOption] = useState<OptionItem>({ text: 'Selecione', value: '' });
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOption = (optionItem: OptionItem) => {
    if (optionItem.value !== option.value) {
      setOption(optionItem);
      props.setter(optionItem.value);
    }
  };

  return (
    <div className={styles['select-input']} onClick={() => setIsOpen(state => !state)}>
      <span className={styles['select-input__label']}>{props.label}</span>

      <div className={styles['select-input__combo-box']} data-is-open={isOpen}>
        <div className={styles['select-input__combo-box__value']}>
          <input type="text" value={option.text} readOnly />
          <img src="/icons/components/icon_expand_more.svg" alt="Seta de seleção da lista" />
        </div>

        <ul className={styles['select-input__combo-box__list']}>
          {props.optionList.map(optionItem => (
            <li key={optionItem.value}>
              <button
                type="button"
                value={optionItem.value}
                onClick={() => handleClickOption(optionItem)}>
                {optionItem.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
