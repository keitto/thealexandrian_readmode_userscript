// ==UserScript==
// @name         The Alexandrian Reading Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Toggle layout elements visibility and width
// @author       Your Name
// @match        https://thealexandrian.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the document to be fully loaded
    window.addEventListener('load', function() {
        // Add button to class .itemhead
        const itemHead = document.querySelector('.itemhead');
        if (itemHead) {
            const toggleButton = document.createElement('button');
            toggleButton.textContent = '🐒 Read Mode';
            itemHead.appendChild(toggleButton);

            // Add event listener to the button
            toggleButton.addEventListener('click', function() {
                const secondary = document.getElementById('secondary');
                const third = document.getElementById('third');
                const yuiMainB = document.querySelector('#yui-main > .yui-b');
                const first = document.querySelector('#yui-main > .yui-b .first');
                const storycontent = document.querySelector('.storycontent');

                if (secondary && third && yuiMainB && first && storycontent) {
                    if (secondary.style.display !== 'none') {
                        // Hide #secondary and #third, adjust width and margin of .yui-main > .yui-b
                        secondary.style.display = 'none';
                        third.style.display = 'none';
                        yuiMainB.style.marginLeft = '0';
                        first.style.width = '100%';
                        storycontent.style.fontSize = '1.2em';
                        storycontent.style.lineHeight = '1.2em';
                    } else {
                        // Show #secondary and #third, revert width and margin of .yui-main > .yui-b
                        secondary.style.display = '';
                        third.style.display = '';
                        yuiMainB.style.marginLeft = '210px'; // Adjust to original value if necessary
                        first.style.width = '74.2%'; // Adjust to original value if necessary
                        storycontent.style.fontSize = '';
                        storycontent.style.lineHeight = '';
                    }
                }
            });
        }
    });
})();
