export default function decorate(fieldDiv, fieldJson) {
    const radios = fieldDiv.querySelectorAll('.radio-wrapper');
    const totalRadio = radios.length;
    for (let i = 0; i < totalRadio; i++) {
        let label = radios[i].querySelector('label');
        let img = document.createElement('img');
        img.src = fieldJson.properties.imageUrls[i];
        img.alt = fieldJson.enumNames[i];
        label.prepend(img);
    }
}