import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../button'

import * as S from './styles'
import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'

import { useEffect, useState } from 'react'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [step, setStep] = useState<
    'cart' | 'address' | 'payment' | 'confirmation'
  >('cart')
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, reset }] = usePurchaseMutation()

  const closeCart = () => {
    dispatch(close())
  }

  useEffect(() => {
    if (isSuccess) dispatch(clear())
  }, [isSuccess, dispatch])

  useEffect(() => {
    if (isOpen) {
      setStep('cart')
    }
  }, [isOpen])

  const getTotalPrice = () => {
    return items.reduce((acc, cur) => {
      return (acc += cur.preco ?? 0)
    }, 0)
  }

  const temRemove = (index: number) => {
    dispatch(remove(index))
  }

  const priceFormat = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      number: 12,
      zipcode: '',
      city: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      expiresMonth: 12,
      expiresYear: 30,
      cardCode: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter ao menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
      zipcode: Yup.string().required('o campo é obrigatório'),
      cardOwner: Yup.string().required('o campo é obrigatório'),
      cardNumber: Yup.string().required('o campo é obrigatório'),
      expiresMonth: Yup.number().required('o campo é obrigatório'),
      expiresYear: Yup.number().required('o campo é obrigatório'),
      cardCode: Yup.string().required('o campo é obrigatório')
    }),

    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipcode,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  if (items.length === 0 && !isSuccess) {
    return (
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <div>
            <S.ConfirmationParagraph>
              Ainda não há nenhum items adicionados
            </S.ConfirmationParagraph>
            <Button
              title="click aqui para continuar com a compra"
              onClick={closeCart}
              type="button"
            >
              voltar
            </Button>
          </div>
        </S.Sidebar>
      </S.CartContainer>
    )
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay
        onClick={() => {
          closeCart()
          if (data) reset()
        }}
      />
      <S.Sidebar>
        <form onSubmit={form.handleSubmit}>
          {isSuccess && data ? (
            <>
              <S.Title>Pedido realizado - {data?.orderId ?? 'ID'}</S.Title>
              <S.ConfirmationParagraph>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </S.ConfirmationParagraph>
              <Button
                title="click aqui para continuar com a compra"
                onClick={() => {
                  closeCart()
                  reset()
                }}
                type="button"
              >
                Concluir
              </Button>
            </>
          ) : (
            <>
              {step === 'cart' && (
                <>
                  <ul>
                    {items.map((item, index) => (
                      <S.CartItem key={`${item.id}-${index}`}>
                        <img src={item.foto} alt="." />
                        <div>
                          <h3>{item.nome}</h3>
                          <span>{priceFormat(item.preco)}</span>
                        </div>
                        <button
                          onClick={() => temRemove(index)}
                          type="button"
                        />
                      </S.CartItem>
                    ))}
                  </ul>
                  <S.Prices>
                    Valor total
                    <span>{priceFormat(getTotalPrice())}</span>
                  </S.Prices>
                  <Button
                    type="button"
                    title="click aqui para continuar com a compra"
                    onClick={() => setStep('address')}
                  >
                    Continuar com a entrega
                  </Button>
                </>
              )}
              {step === 'address' && (
                <>
                  <S.Title>Entrega</S.Title>
                  <S.Form>
                    <S.InputGroup>
                      <label htmlFor="fullName">Quem ira receber</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('fullName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('address') ? 'error' : ''}
                      />
                    </S.InputGroup>

                    <S.InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="zipcode">CEP</label>
                        <InputMask
                          id="zipcode"
                          type="text"
                          name="zipcode"
                          value={form.values.zipcode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="99999-999"
                          className={
                            checkInputHasError('zipcode') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="number">Número</label>
                        <input
                          id="number"
                          type="number"
                          name="number"
                          value={form.values.number}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('number') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.InputGroup>
                      <label htmlFor="complement">
                        Complemento (opicional)
                      </label>
                      <input
                        id="complement"
                        type="text"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('complement') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Form>
                  <Button
                    type="button"
                    title="click aqui para continuar com a compra"
                    onClick={() => {
                      setStep('payment')
                    }}
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    title="click aqui para continuar com a compra"
                    onClick={() => setStep('cart')}
                    type="button"
                  >
                    Voltar para o carrinho
                  </Button>
                </>
              )}
              {step === 'payment' && (
                <>
                  <S.Title>
                    Pagamento - Valor a pagar {priceFormat(getTotalPrice())}
                  </S.Title>
                  <S.Form>
                    <S.InputGroup>
                      <label htmlFor="cardOwner">Nome no Cartão</label>
                      <input
                        id="cardOwner"
                        type="text"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardOwner') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número no cartão</label>
                        <InputMask
                          id="cardNumber"
                          type="text"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="9999 9999 9999 9999"
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup className="cardCode">
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          id="cardCode"
                          type="text"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="999"
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <InputMask
                          id="expiresMonth"
                          type="number"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="99"
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <InputMask
                          id="expiresYear"
                          type="number"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="99"
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                  </S.Form>
                  <Button
                    title="click aqui para continuar com a compra"
                    onClick={() => {
                      form.handleSubmit()
                      if (isSuccess) {
                        setStep('confirmation')
                        dispatch(clear())
                      }
                    }}
                    type="submit"
                  >
                    Finalizar pagamento
                  </Button>
                  <Button
                    title="click aqui para continuar com a compra"
                    onClick={() => setStep('address')}
                    type="button"
                  >
                    Voltar para a edição de endereço
                  </Button>
                </>
              )}
            </>
          )}
        </form>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
