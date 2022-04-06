import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'

import { Container, InputCustom, ContainerInput } from './styles'
import { theme } from '../../../stitches.config'

export default function Input({ name, className, label, placeholder, Icon, ...rest }) {
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container {...rest} className={className}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <ContainerInput className='container-input' isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={16} color={theme.colors.gray10} style={{ marginRight: theme.sizes[2] }} />}
        <InputCustom
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
        />
      </ContainerInput>
    </Container>
  )
}