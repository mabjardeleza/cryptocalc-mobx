import React from 'react';
import Props from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

import CurrencyList from './CurrencyList';

const styles = {
  mainContainer: {
    color: 'gray',
    position: 'relative',
  },
  totalContainer: {
    backgroundColor: '#13161f',
    height: 'inherit',
    position: 'relative',
    width: '100%',
  },
};

const Title = styled(Typography)`
  color: #f58a08;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 10;
  text-transform: uppercase;
  font-weight: 700;
  padding-top: 5px;
  font-size: 2rem;

  & span {
    color: #13161f;
    text-align: right;
  }

  @media (min-width: 375px) {
    font-size: 3rem;
  }

  @media (min-width: 1280px) {
    width: 50%;
    font-size: 5rem;
    padding-top: 20px;
  }
`;

const ContentContainer = styled(Box)`
  height: 100vh;
  flex-direction: column;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const Caret = styled.span`
  position: absolute;
  top: -60px;
  left: 50%;
  margin-left: -30px;
  border-width: 30px;
  border-style: solid;
  border-color: transparent transparent #13161f transparent;

  @media (min-width: 375px) {
    top: -100px;
    left: 50%;
    margin-left: -50px;
    border-width: 50px;
  }

  @media (min-width: 1280px) {
    top: 50%;
    left: -100px;
    margin-top: -50px;
    margin-left: 0;
    border-color: transparent #13161f transparent transparent;
  }
`;

const Total = styled(Typography)`
  & span {
    font-size: 30px;
  }
  color: #fff;
  text-align: center;
  font-size: 3rem;
  padding: 20px;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

const CryptoPage = ({
  allCurrencies,
  prices,
  total,
  calculateTotal,
  classes,
}) => (
  <div className={classes.mainContainer}>
    <Title variant='h1' color='inherit'>
      Crypto<span>Calc</span>
    </Title>
    <ContentContainer display='flex' alignItems='center'>
      <Box
        display='flex'
        flex='1'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <CurrencyList
          allCurrencies={allCurrencies}
          prices={prices}
          calculateTotal={calculateTotal}
        />
      </Box>
      <Box
        className={classes.totalContainer}
        display='flex'
        flex='1'
        alignItems='center'
        justifyContent='center'
      >
        <Total variant='h1' color='inherit'>
          {total.toFixed(2)} <span>AUD</span>
        </Total>
        <Caret />
      </Box>
    </ContentContainer>
  </div>
);

CryptoPage.propTypes = {
  allCurrencies: Props.shape({}),
  calculateTotal: Props.func,
  prices: Props.shape({}),
  total: Props.number,
};

CryptoPage.defaultTypes = {
  allCurrencies: {},
  calculateTotal: () => {},
  currencyValues: {},
  total: 0,
};

export default withStyles(styles)(CryptoPage);
