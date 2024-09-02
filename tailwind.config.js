const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
    presets: [
        require("./vendor/wireui/wireui/tailwind.config.js"),
        require("./vendor/power-components/livewire-powergrid/tailwind.config.js"),
    ],
    content: [
        "./app/Livewire/**/*Table.php",
        "./vendor/power-components/livewire-powergrid/resources/views/**/*.php",
        "./vendor/power-components/livewire-powergrid/src/Themes/Tailwind.php",
    ],
    theme: {
        extend: {
            colors: {
                "pg-primary":colors.slate
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
};
