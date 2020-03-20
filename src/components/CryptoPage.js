import React from 'react';
import Props from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Currency from './Currency';

const styles = {
    title: {
        '& div:first-child': {
            color: '#F58A08',
            textAlign: 'right',
            paddingRight: '10px',
        },
        '& div:nth-child(2)': {
            color: '#fff',
            textAlign: 'left',
            paddingLeft: '10px',
        },
        '& h1': {
            fontWeight: '600',
        },
        position: 'fixed',
        width: '100%',
        zIndex: 10,
        textTransform: 'uppercase',
        display: 'none',
    },
    titleMobile: {
        '& span': {
            color: '#13161f',
            textAlign: 'right',
        },
        color: '#F58A08',
        position: 'fixed',
        textAlign: 'center',
        width: '50%',
        zIndex: 10,
        textTransform: 'uppercase',
        fontWeight: '700',
        paddingTop: '20px',
    },
    mainContainer: {
        color: 'gray',
        position: 'relative',
    },
    contentContainer: {
        height: '100vh',
    },
    totalContainer: {
        backgroundColor: '#13161f',
        height: 'inherit',
        position: 'relative',
    },
    caret: {
        position: 'absolute',
        top: '50%',
        left: '-100px',
        marginTop: '-50px',
        borderWidth: '50px',
        borderStyle: 'solid',
        borderColor: 'transparent #13161f transparent transparent',
    },
    total: {
        '& span': {
            fontSize: '30px',
        },
        color: '#fff',
    },
};

const CryptoPage = ({
  allCurrencies,
  prices,
  total,
  calculateTotal,
  classes,
}) => (
    <div className={classes.mainContainer}>
        <Typography variant="h1" color="inherit" className={classes.titleMobile}>
            Crypto<span>Calc</span>
        </Typography>
        <Box display="flex" alignItems="center" className={classes.title}>
            <Box display="flex" flex="1" justifyContent="flex-end">
                <Typography variant="h1" color="inherit">
                    Crypto
                </Typography>
            </Box>
            <Box display="flex" flex="1">
                <Typography variant="h1" color="inherit">
                    Calc
                </Typography>
            </Box>
        </Box>
        <Box display="flex" alignItems="center" className={classes.contentContainer}>
            <Box display="flex" flex="1" alignItems="center" justifyContent="center" flexDirection="column">
                {Object.values(allCurrencies).map(exchange => (
                <Currency
                    key={exchange.key}
                    exchange={exchange}
                    currencyExchangeValue={prices[exchange.key] ? prices[exchange.key] : 0}
                    calculateTotal={calculateTotal}
                />
                ))}
            </Box>
            <Box className={classes.totalContainer} display="flex" flex="1" alignItems="center" justifyContent="center">
                <Typography variant="h1" color="inherit" className={classes.total}>
                    {total} <span>AUD</span>
                </Typography>
                <span className={classes.caret} />
            </Box>
        </Box>
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
