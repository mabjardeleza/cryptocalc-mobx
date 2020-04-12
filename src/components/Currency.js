import React, { useState, useEffect } from 'react';
import Props from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

import usePrevious from '../hooks/usePrevious';

const Container = styled.div`
  margin: 5px 20px;
  display: flex;

  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ResizeableTextField = styled(TextField)`
  & label,
  & label.Mui-disabled {
    color: #1c1f30;
  }

  & fieldset,
  & .MuiOutlinedInput-root.Mui-disabled fieldset {
    border-color: #1c1f30;
  }

  & input {
    color: #1c1f30;
    padding: 10.5px 14px;
  }

  &:first-child {
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    & input {
      padding: 18.5px 14px;
    }
  }
`;

const Currency = ({
  currencyExchangeValue,
  calculateTotal,
  exchange: { key, title },
}) => {
  const [numberValue, setNumberValue] = useState(0);
  const prevValue = usePrevious(currencyExchangeValue);

  useEffect(() => {
    if (currencyExchangeValue !== prevValue) {
      calculateTotal(numberValue * currencyExchangeValue, key);
    }
  }, [currencyExchangeValue, calculateTotal]);

  const onChangeValue = event => {
    setNumberValue(event.target.value);
    calculateTotal(event.target.value * currencyExchangeValue, key);
  };

  return (
    <Container>
      <ResizeableTextField
        label={title}
        value={numberValue}
        onChange={onChangeValue}
        margin='normal'
        variant='outlined'
      />
      <ResizeableTextField
        label='USD'
        value={numberValue * currencyExchangeValue}
        disabled
        margin='normal'
        variant='outlined'
      />
    </Container>
  );
};

Currency.propTypes = {
  exchange: Props.shape({}),
  currencyExchangeValue: Props.number,
};

Currency.defaultTypes = {
  exchange: {},
  currencyExchangeValue: 0,
};

export default Currency;
