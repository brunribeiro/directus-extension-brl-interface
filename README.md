# Directus BRL Currency Interface Extension

A custom input interface for [Directus](https://directus.io) that allows users to input and format values in Brazilian Real (BRL) currency. This extension provides an intuitive way to handle BRL currency fields with configurable prefix and suffix options, making it ideal for projects that require formatted currency inputs.

![BRL Currency Interface](your-gif-url-here)

---

## Features

- Customizable prefix (default: "R$") and suffix.
- Automatic BRL currency formatting.
- Compatible with integer, float, decimal, and string types in Directus.

---

## Installation

### 1. Install via Directus Marketplace

1. Open your Directus instance.
2. Go to **Settings > Extensions > Marketplace**.
3. Search for **BRL Currency Interface**.
4. Click **Install** to add the extension to your Directus project.

Once installed, the extension will be available as a field interface option when creating or modifying fields in your collections.

### 2. Install via npm

Alternatively, you can install the extension directly from npm:

```bash
npm install directus-extension-brl-interface
```

After installation, restart your Directus instance to load the new extension.

---

## Usage

1. After installation, go to the collection where you want to add a currency field.
2. Create a new field or edit an existing one.
3. Set the **Interface** to **BRL Currency Interface**.
4. Configure the following options:
   - **Prefix**: Customize the currency symbol or text before the number (default is "R$").
   - **Suffix**: Add any text or symbol after the number, if needed.
5. Save the changes and start using your BRL Currency field!

When you input data in this field, it will automatically format values according to the BRL currency standard.

---

## Example

### Demonstration

Here’s a quick look at the BRL Currency Interface in action:

![Demo GIF](your-gif-url-here)

---

## Development

### Requirements

- Directus version: 9.10.0 or higher
- Vue 3
- TypeScript

### Building the Extension

If you’d like to contribute or modify the extension, clone this repository and run:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/brunribeiro/directus-extension-brl-interface/issues) or submit a pull request.

---

## License

This project is licensed under the GPL-3.0 License.

---

Feel free to reach out if you need any help with installation or configuration. Happy formatting!
