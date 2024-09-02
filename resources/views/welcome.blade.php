<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @vite('resources/css/app.css')
        <title>Laravel</title>

        <style>
            body {
                margin-top: 10px;
                background: #111827;
            }
        </style>
    </head>
    <body>
        <livewire:post-table/>
        @livewireScripts
        @vite('resources/js/app.js')
    </body>
</html>
