<template>
	<v-input v-if="disabled" :model-value="formattedValue" disabled />
	<div v-else>
		<div class="brl-interface" :class="{ focus }">
			<v-input
				:model-value="value"
				:type="inputType"
				@focus="focus = true"
				@blur="focus = false"
				@update:model-value="handleChange($event)"
				:placeholder="placeholderText"
			/>
			<div class="formatted-currency">{{ formattedValue }}</div>
		</div>
		<div class="brl-interface-footer"></div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
	props: {
		value: {
			type: [String, Number],
			default: null,
		},
		type: {
			type: String,
			default: null,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		prefix: {
			type: String,
			default: 'R$', // Set default to 'R$' for BRL clarity
		},
		suffix: {
			type: String,
			default: '',
		},
	},
	emits: ['input'],
	setup(props, { emit }) {
		// Currency formatter for BRL
		const formatter = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

		// Computed formatted currency value
		const formattedValue = computed(() => {
			let value = props.value;
			if (typeof value === 'string') {
				value = parseFloat(value);
				if (isNaN(value)) return null;
			}
			return `${props.prefix} ${formatter.format(value)} ${props.suffix}`;
		});

		const focus = ref(false);

		// Determines the input type based on the props type
		const inputType = computed(() => {
			return ['bigInteger', 'integer', 'float', 'decimal'].includes(props.type) ? 'number' : 'text';
		});

		// Placeholder text for input guidance
		const placeholderText = computed(() => {
			return `${props.prefix} 0.00 ${props.suffix}`;
		});

		// Emits the input value when changed
		const handleChange = (value: string): void => {
			emit('input', value);
		};

		return {
			formattedValue,
			focus,
			inputType,
			handleChange,
			placeholderText,
		};
	},
});
</script>

<style scoped>
.brl-interface {
	position: relative;
}

.brl-interface:not(.focus) .v-input {
	--v-input-color: transparent;
}

.formatted-currency {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	padding-left: 18px;
	cursor: text;
	pointer-events: none;
	transition: 0.2s ease-in-out;
}

.brl-interface.focus .formatted-currency {
	top: 100%;
	transform: translateY(0%);
	margin-top: 4px;
	font-size: 0.8em;
	color: var(--foreground-subdued);
}

.brl-interface-footer {
	height: 28px;
}
</style>
