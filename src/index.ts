import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
  id: 'brl-currency', // Adjusted to be more specific and unique
  name: 'BRL Currency Input', // Clarified naming for marketplace visibility
  icon: 'attach_money', // Standard icon name to match Material Icons used in Directus
  description: 'Input interface for formatting Brazilian Real currency values',
  component: InterfaceComponent,
  types: ['string', 'integer', 'bigInteger', 'float', 'decimal'], // Ensured types are suitable for currency input
  options: [
    {
      field: 'prefix',
      name: 'Prefix',
      type: 'string',
      meta: {
        width: 'half',
        interface: 'input', // Adjusted to standard input interface for general compatibility
        options: {
          placeholder: 'e.g., R$', // Added placeholder for user guidance
        },
      },
    },
    {
      field: 'suffix',
      name: 'Suffix',
      type: 'string',
      meta: {
        width: 'half',
        interface: 'input', // Adjusted to standard input interface for consistency
        options: {
          placeholder: 'e.g., BRL', // Added placeholder for clarity
        },
      },
    },
  ],
});
