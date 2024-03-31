const registrationForm = document.getElementById('registrationForm');
const displayArea = document.getElementById('displayArea');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const imageLink = document.getElementById('image').value;
    const gender = document.getElementById('gender').value;
    const skills = document.getElementById('skills').value;

    displayArea.innerHTML = `
        <h3>Submitted Data</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Website: ${website || 'Not provided'}</p> 
        <p>Image: ${imageLink ? `<img src="${imageLink}" alt="Profile Image" width="100">` : 'Not provided'}</p>
        <p>Gender: ${gender}</p>
        <p>Skills: ${skills}</p> 
    `;
});
