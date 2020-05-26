const upperBtn = document.getElementById('upper_btn');
const nameInput = document.getElementById('name_input');
const resultDiv = document.getElementById('result_div');


upperBtn.addEventListener('click', () => {
    resultDiv.textContent = nameInput.value.toUpperCase();
});
