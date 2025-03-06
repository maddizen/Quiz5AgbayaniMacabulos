import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Add slices for authentication, products, etc.
  },
});

export default store;
