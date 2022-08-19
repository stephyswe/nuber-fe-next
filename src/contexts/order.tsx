import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { CreateOrderItemInput } from '@/__generated__/graphql';

interface OrderState {
  orderItems: CreateOrderItemInput[];
  setOrderItems: Dispatch<SetStateAction<CreateOrderItemInput[]>>;
  orderItem: CreateOrderItemInput | undefined;
  setOrderItem: Dispatch<SetStateAction<CreateOrderItemInput | undefined>>;
}

const OrderContext = createContext<undefined | OrderState>(undefined);

const OrderProvider = ({ children }: any) => {
  const [orderItems, setOrderItems] = useState<CreateOrderItemInput[]>([]);
  const [orderItem, setOrderItem] = useState<CreateOrderItemInput>();

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        setOrderItems,
        orderItem,
        setOrderItem,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export function useOrders() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within a OrderProvider');
  }
  return context;
}

export { OrderContext, OrderProvider };
