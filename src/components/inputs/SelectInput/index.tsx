import { useState, useRef, useEffect } from 'react';
import { type FieldError, useFormContext } from 'react-hook-form';

import classNames from 'classnames';

import './styles.scss';

type OptionItem = {
  text: string;
  value: string;
};

type Props = {
  label: string;
  name: string;
  options: OptionItem[];
  error?: FieldError;
};

export default function SelectInput({ label, name, options, error }: Props) {
  const { setValue } = useFormContext();
  const [option, setOption] = useState<OptionItem>(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const clickOption = (item: OptionItem) => {
    if (item.value !== option.value) {
      setOption(item);
      setValue('uf', item.value);
    }
  };

  useEffect(() => {
    document.addEventListener('click', event => {
      const ref = componentRef.current;
      const target = event.target as HTMLElement | null;

      if (ref && target) {
        const tagName = target.tagName.toLowerCase();

        if (!ref.contains(target)) {
          setIsOpen(false);
        }

        if (ref.contains(target) && tagName === 'input') {
          setIsOpen(true);
        }

        if (ref.contains(target) && tagName !== 'input') {
          setIsOpen(false);
        }
      }
    });
  }, []);

  return (
    <div className="select-input" ref={componentRef}>
      <span className="select-input__label">{label}</span>

      <div className={classNames('select-input__combo-box', { '--is-open': isOpen })}>
        <div className="select-input__combo-box__value">
          <input type="text" name={name} id={name} value={option.text} readOnly />
          <img src="/icons/components/icon_expand_more.svg" alt="Seta de seleção da lista" />
        </div>

        <ul className="select-input__combo-box__list">
          {options.map(item => (
            <li key={item.value}>
              <button type="button" onClick={() => clickOption(item)}>
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {!!error && <div className="select-input__error-message">{error.message}</div>}
    </div>
  );
}
