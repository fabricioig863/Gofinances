import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType
} from './styles';

export type FormData = {
  [name: string]: any;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [categorySelectModalOpen, setCategorySelectModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const {
    control,
    handleSubmit
  } =  useForm ()

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategorySelectModalOpen(true)
  }

  function handleCloseSelectCategoryModal(){
    setCategorySelectModalOpen(false)
  }

  function handleRegister(form: Partial<FormData>){
    const dataFormRegister = {
      amount: form.amount,
      name: form.name,
      transactionType,
      category: category.key
    }
    console.log('Log: dataFormRegsiter', dataFormRegister)
  }


  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm
            name="name"
            control={control}
            placeholder="Nome"
          />

          <InputForm
            name="amount"
            control={control}
            placeholder="Preço"
          />

          <TransactionsType>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsType>

          <CategorySelectButton 
            title={category.name} 
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button
          title="Enviar"
          onPress={handleSubmit(handleRegister)}
        />
      </Form>

      <Modal visible={categorySelectModalOpen} statusBarTranslucent={true}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>


    </Container>
  )
}
