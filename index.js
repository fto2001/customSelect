class CustomSelect extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const selectContainer = document.createElement('div');
        selectContainer.id = 'select-container';

        const select = document.createElement('select');
        select.id = 'select';

        const selectImage = document.createElement('img');
        selectImage.id = 'select-image';
        selectImage.src = 'https://flagsapi.com/US/flat/64.png';

        select.addEventListener('change', () => {
            const selectedOption = select.value;
            const imageUrl = `https://flagsapi.com/${selectedOption}/flat/64.png`;
            selectImage.src = imageUrl;
        });

        const options = [
            { value: 'US', text: 'United States' },
            { value: 'AU', text: 'Australia' },
            { value: 'AT', text: 'Austria' },
            { value: 'BE', text: 'Belgium' },
            { value: 'BG', text: 'Bulgaria' },
        ];

        options.forEach(optionData => {
            const option = document.createElement('option');
            option.value = optionData.value;
            option.textContent = optionData.text;
            select.appendChild(option);
        });

        const style = document.createElement('style');
        style.textContent = `
            #select-container {
                position: relative;
                width: 300px;
            }

            #select {
                width: 300px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                cursor: pointer;
                font-size: 20px;
            }

            #select-image {
                position: absolute;
                bottom: 8px;
                right: 30px;
                width: 25px;
                cursor: pointer;
            }
        `;

        selectContainer.appendChild(select);
        selectContainer.appendChild(selectImage);
        shadow.appendChild(style);
        shadow.appendChild(selectContainer);
    }
}

customElements.define('custom-select', CustomSelect);