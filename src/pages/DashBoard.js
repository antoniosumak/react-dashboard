import React, { useState, useContext } from 'react';
import Section from '../components/Section/Section';
import {
  InputContainer,
  Input,
  InputLabel,
  Button,
  CostItem,
  CostCards,
  CostCardsContainer,
  BalanceContainer,
  MainBalance,
  ValuesContainer,
  ValuesLabel,
  Breakdown,
  BreakdownValues,
  BreakDownFlex,
  BreakdownLabel,
} from '../lib/styles/generalStyles';
import { TransactionContext } from '../context/TransactionContext';

const Dashboard = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const contextData = useContext(TransactionContext);
  localStorage.setItem('data', JSON.stringify(contextData.transactions));

  const { addTransaction } = useContext(TransactionContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  let sum = 0;
  let cost = 0;
  let dobit = 0;
  return (
    <>
      <Section>
        {contextData.transactions &&
          contextData.transactions.forEach((values) => (sum += values.amount))}
        {contextData.transactions &&
          contextData.transactions.forEach((values) =>
            values.amount < 0
              ? (cost += values.amount)
              : (dobit += values.amount)
          )}
        <BalanceContainer>
          <ValuesContainer>
            <ValuesLabel>Balance</ValuesLabel>
            <MainBalance>{sum} kn</MainBalance>
          </ValuesContainer>
          <Breakdown>
            <BreakDownFlex values={cost}>
              <BreakdownLabel>Expenses</BreakdownLabel>
              <BreakdownValues values={cost}>
                {Math.abs(cost)} kn
              </BreakdownValues>
            </BreakDownFlex>
            <BreakDownFlex values={dobit}>
              <BreakdownLabel>Income</BreakdownLabel>
              <BreakdownValues values={dobit}>{dobit} kn</BreakdownValues>
            </BreakDownFlex>
          </Breakdown>
        </BalanceContainer>
        <form onSubmit={onSubmit}>
          <InputContainer>
            <InputLabel htmlFor="text">Name of cost:</InputLabel>
            <Input
              id="text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <InputLabel htmlFor="amount">Amount:</InputLabel>
            <Input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button>Add</Button>
          </InputContainer>
        </form>
        {contextData && (
          <CostCardsContainer>
            {contextData.transactions.map((values, index) => (
              <CostCards key={index} amount={values.amount}>
                <CostItem>{values.text}</CostItem>
                <CostItem>{values.amount} kn</CostItem>
              </CostCards>
            ))}
          </CostCardsContainer>
        )}
      </Section>
    </>
  );
};

export default Dashboard;
